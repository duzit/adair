/* eslint-disable */

export default {
  init() {
    window.CKEDITOR.plugins.add('wordcount', {
      lang: 'ar,bg,ca,cs,da,de,el,en,es,eu,fa,fi,fr,he,hr,hu,it,ka,ko,ja,nl,no,pl,pt,pt-br,ru,sk,sv,tr,uk,zh-cn,zh,ro', // %REMOVE_LINE_CORE%
      version: '1.17.9',
      requires: 'htmlwriter,notification,undo',
      bbcodePluginLoaded: false,
      icons: 'wordcount',
      onLoad() {
        // CKEDITOR.plugins.setLang('wordcount', 'zh-cn', {}) 为解决 wordcount.js 中报错问题
        // 在 editor.lang 对象中 增加 wordcount 属性
        CKEDITOR.plugins.setLang('wordcount', 'zh-cn', {
          WordCount: '词数:',
          WordCountRemaining: 'Words remaining',
          CharCount: '字符:',
          CharCountRemaining: '个剩余字符',
          CharCountWithHTML: '字符 (含HTML)',
          CharCountWithHTMLRemaining: 'Characters (with HTML) remaining',
          Paragraphs: '段落:',
          ParagraphsRemaining: 'Paragraphs remaining',
          pasteWarning: '由于上限允许,内容不能粘贴',
          Selected: '已选择: ',
          title: '统计',
        });
        // CKEDITOR.document.appendStyleSheet("./css/wordcount.css");
        // CKEDITOR.document.appendStyleSheet(this.path + "css/wordcount.css");
      },
      init(editor) {
        let defaultFormat = '';
        let lastWordCount = -1;
        let lastCharCount = -1;
        let lastParagraphs = -1;
        let limitReachedNotified = false;
        let limitRestoredNotified = false;
        let timeoutId = 0;
        let notification = null;

        const dispatchEvent = function(type, currentLength, maxLength) {
          if (typeof document.dispatchEvent === 'undefined') {
            return;
          }

          type = `ckeditor.wordcount.${ type}`;

          let cEvent;
          const eventInitDict = {
            bubbles: false,
            cancelable: true,
            detail: {
              currentLength,
              maxLength,
            },
          };

          try {
            cEvent = new CustomEvent(type, eventInitDict);
          } catch (o_O) {
            cEvent = document.createEvent('CustomEvent');
            cEvent.initCustomEvent(
              type,
              eventInitDict.bubbles,
              eventInitDict.cancelable,
              eventInitDict.detail,
            );
          }

          document.dispatchEvent(cEvent);
        };

        // Default Config
        const defaultConfig = {
          showRemaining: false,
          showParagraphs: false,
          showWordCount: false,
          showCharCount: true,
          countBytesAsChars: false,
          countSpacesAsChars: false,
          countHTML: true,
          countLineBreaks: false,
          hardLimit: true,
          warnOnLimitOnly: false,
          wordDelims: '',

          // MAXLENGTH Properties
          maxWordCount: -1,
          maxCharCount: 1024,
          maxParagraphs: -1,

          // Filter
          filter: null,

          // How long to show the 'paste' warning
          pasteWarningDuration: 1,

          // DisAllowed functions
          wordCountGreaterThanMaxLengthEvent(currentLength, maxLength) {
            dispatchEvent('wordCountGreaterThanMaxLengthEvent', currentLength, maxLength);
          },
          charCountGreaterThanMaxLengthEvent(currentLength, maxLength) {
            dispatchEvent('charCountGreaterThanMaxLengthEvent', currentLength, maxLength);
          },

          // Allowed Functions
          wordCountLessThanMaxLengthEvent(currentLength, maxLength) {
            dispatchEvent('wordCountLessThanMaxLengthEvent', currentLength, maxLength);
          },
          charCountLessThanMaxLengthEvent(currentLength, maxLength) {
            dispatchEvent('charCountLessThanMaxLengthEvent', currentLength, maxLength);
          },
        };

        // Get Config & Lang
        const config = CKEDITOR.tools.extend(defaultConfig, editor.config.wordcount || {}, true);

        if (config.showParagraphs) {
          if (config.maxParagraphs > -1) {
            if (config.showRemaining) {
              defaultFormat += `%paragraphsCount% ${ editor.lang.wordcount.ParagraphsRemaining}`;
            } else {
              defaultFormat += `${editor.lang.wordcount.Paragraphs } %paragraphsCount%`;

              defaultFormat += `/${ config.maxParagraphs}`;
            }
          } else {
            defaultFormat += `${editor.lang.wordcount.Paragraphs } %paragraphsCount%`;
          }
        }

        if (config.showParagraphs && (config.showWordCount || config.showCharCount)) {
          defaultFormat += ', ';
        }

        if (config.showWordCount) {
          if (config.maxWordCount > -1) {
            if (config.showRemaining) {
              defaultFormat += `%wordCount% ${ editor.lang.wordcount.WordCountRemaining}`;
            } else {
              defaultFormat += `${editor.lang.wordcount.WordCount } %wordCount%`;

              defaultFormat += `/${ config.maxWordCount}`;
            }
          } else {
            defaultFormat += `${editor.lang.wordcount.WordCount } %wordCount%`;
          }
        }

        if (config.showCharCount && config.showWordCount) {
          defaultFormat += ', ';
        }

        if (config.showCharCount) {
          if (config.maxCharCount > -1) {
            if (config.showRemaining) {
              defaultFormat += `%charCount% ${
                editor.lang.wordcount[config.countHTML
                  ? 'CharCountWithHTMLRemaining'
                  : 'CharCountRemaining']}`;
            } else {
              defaultFormat += `${editor.lang.wordcount[config.countHTML
                ? 'CharCountWithHTML'
                : 'CharCount']
              } %charCount%`;

              defaultFormat += `/${ config.maxCharCount}`;
            }
          } else {
            defaultFormat += `${editor.lang.wordcount[config.countHTML ? 'CharCountWithHTML' : 'CharCount']
            } %charCount%`;
          }
        }

        const format = defaultFormat;

        // bbcodePluginLoaded = typeof editor.plugins.bbcode != "undefined";

        function counterId(editorInstance) {
          return `cke_wordcount_${ editorInstance.name}`;
        }

        function counterElement(editorInstance) {
          return document.getElementById(counterId(editorInstance));
        }

        function strip(html) {
          // if (bbcodePluginLoaded) {
          //     // stripping out BBCode tags [...][/...]
          //     return html.replace(/\[.*?\]/gi, "");
          // }

          const tmp = document.createElement('div');

          // Add filter before strip
          html = filter(html);

          tmp.innerHTML = html;

          if (tmp.textContent == '' && typeof tmp.innerText === 'undefined') {
            return '';
          }

          return tmp.textContent || tmp.innerText;
        }

        /**
             * Implement filter to add or remove before counting
             * @param html
             * @returns string
             */
        function filter(html) {
          if (config.filter instanceof CKEDITOR.htmlParser.filter) {
            const fragment = CKEDITOR.htmlParser.fragment.fromHtml(html);
            const writer = new CKEDITOR.htmlParser.basicWriter();
            config.filter.applyTo(fragment);
            fragment.writeHtml(writer);
            return writer.getHtml();
          }
          return html;
        }

        function countCharacters(text) {
          if (config.countHTML) {
            return config.countBytesAsChars ? countBytes(filter(text)) : filter(text).length;
          }

          let normalizedText;

          // strip body tags
          if (editor.config.fullPage) {
            const i = text.search(new RegExp('<body>', 'i'));
            if (i != -1) {
              const j = text.search(new RegExp('</body>', 'i'));
              text = text.substring(i + 6, j);
            }
          }

          normalizedText = text;

          if (!config.countSpacesAsChars) {
            normalizedText = text.replace(/\s/g, '').replace(/&nbsp;/g, '');
          }

          if (config.countLineBreaks) {
            normalizedText = normalizedText.replace(/(\r\n|\n|\r)/gm, ' ');
          } else {
            normalizedText = normalizedText.replace(/(\r\n|\n|\r)/gm, '').replace(/&nbsp;/gi, ' ');
          }

          normalizedText = strip(normalizedText).replace(/^([\t\r\n]*)$/, '');

          return config.countBytesAsChars ? countBytes(normalizedText) : normalizedText.length;
        }

        function countBytes(text) {
          let count = 0; const stringLength = text.length; let
            i;
          text = String(text || '');
          for (i = 0; i < stringLength; i++) {
            const partCount = encodeURI(text[i]).split('%').length;
            count += partCount == 1 ? 1 : partCount - 1;
          }
          return count;
        }

        function countParagraphs(text) {
          return text.replace(/&nbsp;/g, ' ').replace(/(<([^>]+)>)/ig, '').replace(/^\s*$[\n\r]{1,}/gm, '++')
            .split('++').length;
        }

        function countWords(text) {
          let normalizedText = text.replace(/(\r\n|\n|\r)/gm, ' ').replace(/^\s+|\s+$/g, '')
            .replace('&nbsp;', ' ');

          normalizedText = strip(normalizedText);

          let re = config.wordDelims ? new RegExp(`[\\s${config.wordDelims}]+`) : /\s+/;
          const words = normalizedText.split(re);

          re = config.wordDelims ? new RegExp(`^([\\s\\t\\r\\n${config.wordDelims}]*)$`) : /^([\s\t\r\n]*)$/;
          for (let wordIndex = words.length - 1; wordIndex >= 0; wordIndex--) {
            if (!words[wordIndex] || words[wordIndex].match(re)) {
              words.splice(wordIndex, 1);
            }
          }

          return words.length;
        }

        function limitReached(editorInstance, notify) {
          limitReachedNotified = true;
          limitRestoredNotified = false;

          if (!config.warnOnLimitOnly) {
            if (config.hardLimit) {
              if (editor.mode === 'source' && editor.plugins.codemirror) {
                window[`codemirror_${ editor.id}`].undo();
              } else {
                editorInstance.execCommand('undo');
                editorInstance.execCommand('undo');
              }
            }
          }

          if (!notify) {
            counterElement(editorInstance).className = 'cke_path_item cke_wordcountLimitReached';
            editorInstance.fire('limitReached', { firedBy: 'wordCount.limitReached' }, editor);
          }
        }

        function limitRestored(editorInstance) {
          limitRestoredNotified = true;
          limitReachedNotified = false;

          if (!config.warnOnLimitOnly) {
            editorInstance.fire('saveSnapshot');
          }

          counterElement(editorInstance).className = 'cke_path_item';
        }

        function updateCounter(editorInstance) {
          if (!counterElement(editorInstance)) {
            return;
          }

          let paragraphs = 0;
          let wordCount = 0;
          let charCount = 0;
          let text;

          // BeforeGetData and getData events are fired when calling
          // getData(). We can prevent this by passing true as an
          // argument to getData(). This allows us to fire the events
          // manually with additional event data: firedBy. This additional
          // data helps differentiate calls to getData() made by
          // wordCount plugin from calls made by other plugins/code.
          editorInstance.fire('beforeGetData', { firedBy: 'wordCount.updateCounter' }, editor);
          text = editorInstance.getData(true);
          editorInstance.fire('getData', { dataValue: text, firedBy: 'wordCount.updateCounter' }, editor);

          if (text) {
            if (config.showCharCount) {
              charCount = countCharacters(text);
            }

            if (config.showParagraphs) {
              paragraphs = countParagraphs(text);
            }

            if (config.showWordCount) {
              wordCount = countWords(text);
            }
          }

          let html = format;
          if (config.showRemaining) {
            if (config.maxCharCount >= 0) {
              html = html.replace('%charCount%', config.maxCharCount - charCount);
            } else {
              html = html.replace('%charCount%', charCount);
            }

            if (config.maxWordCount >= 0) {
              html = html.replace('%wordCount%', config.maxWordCount - wordCount);
            } else {
              html = html.replace('%wordCount%', wordCount);
            }

            if (config.maxParagraphs >= 0) {
              html = html.replace('%paragraphsCount%', config.maxParagraphs - paragraphs);
            } else {
              html = html.replace('%paragraphsCount%', paragraphs);
            }
          } else {
            html = html.replace('%wordCount%', wordCount).replace('%charCount%', charCount).replace('%paragraphsCount%', paragraphs);
          }

          (editorInstance.config.wordcount || (editorInstance.config.wordcount = {})).wordCount = wordCount;
          (editorInstance.config.wordcount || (editorInstance.config.wordcount = {})).charCount = charCount;

          if (CKEDITOR.env.gecko) {
            counterElement(editorInstance).innerHTML = html;
          } else {
            counterElement(editorInstance).innerText = html;
          }

          if (charCount == lastCharCount && wordCount == lastWordCount && paragraphs == lastParagraphs) {
            if (charCount == config.maxCharCount || wordCount == config.maxWordCount || paragraphs > config.maxParagraphs) {
              editorInstance.fire('saveSnapshot');
            }
            return true;
          }

          // If the limit is already over, allow the deletion of characters/words. Otherwise,
          // the user would have to delete at one go the number of offending characters
          const deltaWord = wordCount - lastWordCount;
          const deltaChar = charCount - lastCharCount;
          const deltaParagraphs = paragraphs - lastParagraphs;

          lastWordCount = wordCount;
          lastCharCount = charCount;
          lastParagraphs = paragraphs;

          if (lastWordCount == -1) {
            lastWordCount = wordCount;
          }
          if (lastCharCount == -1) {
            lastCharCount = charCount;
          }
          if (lastParagraphs == -1) {
            lastParagraphs = paragraphs;
          }

          // Check for word limit and/or char limit
          if (config.maxWordCount > -1 && wordCount > config.maxWordCount && deltaWord > 0 ||
                    config.maxCharCount > -1 && charCount > config.maxCharCount && deltaChar > 0 ||
                    config.maxParagraphs > -1 && paragraphs > config.maxParagraphs && deltaParagraphs > 0) {
            limitReached(editorInstance, limitReachedNotified);
          } else if ((config.maxWordCount == -1 || wordCount <= config.maxWordCount) &&
                    (config.maxCharCount == -1 || charCount <= config.maxCharCount) &&
                    (config.maxParagraphs == -1 || paragraphs <= config.maxParagraphs)) {
            limitRestored(editorInstance);
          } else {
            editorInstance.fire('saveSnapshot');
          }

          // update instance
          editorInstance.wordCount =
                {
                  paragraphs,
                  wordCount,
                  charCount,
                };

          // Fire Custom Events
          if (config.charCountGreaterThanMaxLengthEvent && config.charCountLessThanMaxLengthEvent) {
            if (charCount > config.maxCharCount && config.maxCharCount > -1) {
              config.charCountGreaterThanMaxLengthEvent(charCount, config.maxCharCount);
            } else {
              config.charCountLessThanMaxLengthEvent(charCount, config.maxCharCount);
            }
          }

          if (config.wordCountGreaterThanMaxLengthEvent && config.wordCountLessThanMaxLengthEvent) {
            if (wordCount > config.maxWordCount && config.maxWordCount > -1) {
              config.wordCountGreaterThanMaxLengthEvent(wordCount, config.maxWordCount);
            } else {
              config.wordCountLessThanMaxLengthEvent(wordCount, config.maxWordCount);
            }
          }

          return true;
        }

        function isCloseToLimits() {
          if (config.maxWordCount > -1 && config.maxWordCount - lastWordCount < 5) {
            return true;
          }

          if (config.maxCharCount > -1 && config.maxCharCount - lastCharCount < 20) {
            return true;
          }

          if (config.maxParagraphs > -1 && config.maxParagraphs - lastParagraphs < 1) {
            return true;
          }

          return false;
        }

        editor.on('key',
          function(event) {
            const ms = isCloseToLimits() ? 5 : 250;

            if (editor.mode === 'source') {
              clearTimeout(timeoutId);
              timeoutId = setTimeout(
                updateCounter.bind(this, event.editor),
                ms,
              );
            }

            if (event.data.keyCode == 13) {
              clearTimeout(timeoutId);
              timeoutId = setTimeout(
                updateCounter.bind(this, event.editor),
                ms,
              );
            }
          },
          editor);

        editor.on('change',
          function(event) {
            const ms = isCloseToLimits() ? 5 : 250;
            clearTimeout(timeoutId);
            timeoutId = setTimeout(
              updateCounter.bind(this, event.editor),
              ms,
            );
          },
          editor);

        editor.on('uiSpace',
          (event) => {
            let wordcountClass = 'cke_wordcount';

            if (editor.lang.dir == 'rtl') {
              wordcountClass = `${wordcountClass } cke_wordcount_rtl`;
            }

            if (editor.elementMode === CKEDITOR.ELEMENT_MODE_INLINE) {
              if (event.data.space == 'top') {
                event.data.html += `<div class="${ wordcountClass }" style=""` +
                                ` title="${
                                  editor.lang.wordcount.title
                                }"` +
                                `><span id="${
                                  counterId(event.editor)
                                }" class="cke_path_item">&nbsp;</span></div>`;
              }
            } else if (event.data.space == 'bottom') {
              event.data.html += `<div class="${wordcountClass }" style=""` +
                                ` title="${
                                  editor.lang.wordcount.title
                                }"` +
                                `><span id="${
                                  counterId(event.editor)
                                }" class="cke_path_item">&nbsp;</span></div>`;
            }
          },
          editor,
          null,
          100);

        editor.on('dataReady',
          (event) => {
            updateCounter(event.editor);
          },
          editor,
          null,
          100);

        editor.on('paste',
          (event) => {
            if (!config.warnOnLimitOnly && (config.maxWordCount > 0 || config.maxCharCount > 0 || config.maxParagraphs > 0)) {
              // Check if pasted content is above the limits
              let wordCount = -1;
              let charCount = -1;
              let paragraphs = -1;

              const mySelection = event.editor.getSelection();
              const selectedText = mySelection.getNative().toString().trim();

              // BeforeGetData and getData events are fired when calling
              // getData(). We can prevent this by passing true as an
              // argument to getData(). This allows us to fire the events
              // manually with additional event data: firedBy. This additional
              // data helps differentiate calls to getData() made by
              // wordCount plugin from calls made by other plugins/code.
              event.editor.fire('beforeGetData', { firedBy: 'wordCount.onPaste' }, event.editor);
              let text = event.editor.getData(true);
              event.editor.fire('getData', { dataValue: text, firedBy: 'wordCount.onPaste' }, event.editor);

              if (selectedText.length > 0) {
                const plaintext = event.editor.document.getBody().getText();

                if (plaintext.length === selectedText.length) {
                  text = '';
                }
              }

              text += event.data.dataValue;

              if (config.showCharCount) {
                charCount = countCharacters(text);
              }

              if (config.showWordCount) {
                wordCount = countWords(text);
              }

              if (config.showParagraphs) {
                paragraphs = countParagraphs(text);
              }

              // Instantiate the notification when needed and only have one instance
              if (notification === null) {
                notification = new CKEDITOR.plugins.notification(event.editor,
                  {
                    message: event.editor.lang.wordcount.pasteWarning,
                    type: 'warning',
                    duration: config.pasteWarningDuration,
                  });
              }

              if (config.maxCharCount > 0 && charCount > config.maxCharCount && config.hardLimit) {
                if (!notification.isVisible()) {
                  notification.show();
                }
                event.cancel();
              }

              if (config.maxWordCount > 0 && wordCount > config.maxWordCount && config.hardLimit) {
                if (!notification.isVisible()) {
                  notification.show();
                }
                event.cancel();
              }

              if (config.maxParagraphs > 0 && paragraphs > config.maxParagraphs && config.hardLimit) {
                if (!notification.isVisible()) {
                  notification.show();
                }
                event.cancel();
              }
            }
          },
          editor,
          null,
          100);

        editor.on('afterPaste',
          (event) => {
            updateCounter(event.editor);
          },
          editor,
          null,
          100);

        editor.on('afterPasteFromWord',
          (event) => {
            updateCounter(event.editor);
          },
          editor,
          null,
          100);
      },
    });
  },
};
