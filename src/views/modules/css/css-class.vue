<template>
  <div class="css-class">
    <h4>链接 a</h4>
    <div class="css-class_a">
      <a href="#">链接1</a>
      <a href="#">链接2</a>
      <tips-item
        :tips="class_a"
        :width="300" />
    </div>
    <hr>
    <h4>checked disabled</h4>
    <div class="css-class_checked">
      <input
        id="yes"
        type="radio"
        name="input"
        value="0">
      <label for="yes">Yes</label>
      <input
        id="no"
        type="radio"
        name="input"
        value="1">
      <label for="no">No</label>
      <br>
      <label for="">disabled</label>
      <input
        type="text"
        disabled>
      <tips-item
        :tips="class_checked"
        :width="300" />
    </div>
    <hr>
    <h4>first-letter first-child nth-child nth-of-type only-child...</h4>
    <div class="css-class_first">
      <p>first letter</p>
      <ul class="first-last">
        <li>第一个first child</li>
        <li>第二个</li>
        <li>第三个last child</li>
      </ul>
      <tips-item
        tips="first last child"
        :width="300" />
      <ul class="not-first-last">
        <li>not 1</li>
        <li>not 2</li>
        <p>not p</p>
      </ul>
      <tips-item
        tips="not(li)"
        :width="300" />
      <ul class="first-of-child">
        <span>ul 第一个元素是 span 不是 li</span>
        <li>li 1</li>
        <li>li 2</li>
      </ul>
      <tips-item
        :tips="firstOfType"
        :width="300" />
      <ul class="nth-child">
        <li>nth child 1</li>
        <li>nth child 2</li>
        <li>nth child 3</li>
        <li>nth child 4</li>
      </ul>
      <ul class="nth-of-type">
        <span>nth of type span 1</span>
        <li>nth of-type 1</li>
        <span>nth of type span 2</span>
        <li>nth of-type 2</li>
        <li>nth of-type 3</li>
        <li>nth of-type 4</li>
      </ul>
      <ul class="nthClass">
        <li>测试指定index下如果不是li元素 是否生效 1</li>
        <span>ul 下第二个元素span</span>
        <li>测试指定index下如果不是li元素 是否生效 2</li>
        <li>测试指定index下如果不是li元素 是否生效 3</li>
      </ul>
      <ul class="only-child">
        <li>only child</li>
        <span>only child span</span>
      </ul>
      <tips-item
        :tips="nthChildOfType"
        :width="500" />
    </div>
    <hr>
    <h4>伪元素 ::before ::after</h4>
    <div class="before-after">
      <p>Hello ::before</p>
      <p>Bye ::after</p>
      <tips-item
        tips="before after 需设置为块级元素"
        :width="200" />
    </div>
  </div>
</template>

<script>
  import {
    class_a,
    class_checked,
    firstOfType,
    nthChildOfType,
  } from '../../../utils/tips';

  export default {
    data() {
      return {
        class_a,
        class_checked,
        firstOfType,
        nthChildOfType,

      };
    },
  };
</script>

<style lang="scss" scoped>
  .css-class {
    .css-class_a {
      a {
        margin-right: 10px;
      }
      a:first-child {
        font-size: 16px;
        &:active {
          color: burlywood;
        }
      }
      a:last-child {
        font-weight: bold;
      }
    }

    .css-class_checked {
      input[type=radio]:checked + label {
        font-weight: bold;
      }
      input[type=text]:disabled {
        background: #eaeaea;
        cursor: not-allowed;
      }
    }

    .css-class_first {
      p:first-letter {
        text-transform: uppercase;
        color: red;
      }
      .first-last {
        li:first-child {
          color:rosybrown;
          font-weight: bold;
        }
        li:last-child {
          color: royalblue;
          font-weight: bold;
        }
      }
      .not-first-last {
        :not(li) {
          color: sienna;
          font-weight: bold;
        }
      }
      .first-of-child {
        li:first-child {
          color: aqua;
        }
        li:first-of-type {
          color: aqua;
        }
      }
      .nth-child {
        li:nth-child(2n) {
          color: brown;
          font-weight: bold;
        }
        li:nth-child(2n - 1) {
          color: black;
          font-weight: bold;
        }
      }
      .nth-of-type {
        // 将 span 也算进奇偶数中
        // li:nth-child(2n) {
        //   font-weight: bold;
        // }
        // 只算 li 的奇偶性
        li:nth-of-type(2n) {
          font-weight: bold;
        }
      }
      .nthClass {
        // ul下第二个元素是span 不生效
        li:nth-child(2) {
          font-weight: bold;
        }

        // 第二个li生效
        li:nth-of-type(2) {
          font-weight: bold;
        }
      }
      .only-child {
        // 如果包含非li元素，无效
        li:only-child {
          font-weight: bold;
        }
        // 有且只有一个li元素才有效
        li:only-of-type {
          font-weight: bold;
        }
      }
    }
    .before-after {
      p:first-child {
        &::before {
          content: '';
          display: inline-block;
          width: 3px;
          height: 20px;
          background: blueviolet;
        }
      }
      p:last-of-type {
        &::after {
          content: '';
          display: inline-block;
          width: 3px;
          height: 20px;
          background: blueviolet;
        }
      }
    }
  }
</style>
