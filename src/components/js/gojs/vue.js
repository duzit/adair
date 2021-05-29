function init() {
  if (window.goSamples) goSamples(); // init for these samples -- you don't need to call this

  const $ = go.GraphObject.make;

  Vue.component('diagram', {
    template: '', // just a plain DIV
    props: ['modelData'], // accept model data as a parameter
    mounted() {
      const self = this;
      const myDiagram =
        $(go.Diagram, this.$el,
          {
            layout: $(go.TreeLayout, { angle: 90, arrangement: go.TreeLayout.ArrangementHorizontal }),
            'undoManager.isEnabled': true,
            // Model ChangedEvents get passed up to component users
            ModelChanged(e) { self.$emit('model-changed', e); },
            ChangedSelection(e) { self.$emit('changed-selection', e); },
          });

      myDiagram.nodeTemplate =
        $(go.Node, 'Auto',
          $(go.Shape,
            {
              fill: 'white',
              strokeWidth: 0,
              portId: '',
              fromLinkable: true,
              toLinkable: true,
              cursor: 'pointer',
            },
            new go.Binding('fill', 'color')),
          $(go.TextBlock,
            { margin: 8, editable: true },
            new go.Binding('text').makeTwoWay()));

      myDiagram.linkTemplate =
        $(go.Link,
          { relinkableFrom: true, relinkableTo: true },
          $(go.Shape),
          $(go.Shape, { toArrow: 'OpenTriangle' }));

      this.diagram = myDiagram;

      this.updateModel(this.modelData);
    },
    watch: {
      modelData(val) { this.updateModel(val); },
    },
    methods: {
      model() { return this.diagram.model; },
      updateModel(val) {
        // No GoJS transaction permitted when replacing Diagram.model.
        if (val instanceof go.Model) {
          this.diagram.model = val;
        } else {
          const m = new go.GraphLinksModel();
          if (val) {
            for (const p in val) {
              m[p] = val[p];
            }
          }
          this.diagram.model = m;
        }
      },
      updateDiagramFromData() {
        this.diagram.startTransaction();
        // This is very general but very inefficient.
        // It would be better to modify the diagramData data by calling
        // Model.setDataProperty or Model.addNodeData, et al.
        this.diagram.updateAllRelationshipsFromData();
        this.diagram.updateAllTargetBindings();
        this.diagram.commitTransaction('updated');
      },
    },
  });


  myApp = new Vue({
    el: '#sample',
    data: {
      diagramData: { // passed to  as its modelData
        nodeDataArray: [
          { key: 1, text: 'Alpha', color: 'lightblue' },
          { key: 2, text: 'Beta', color: 'orange' },
          { key: 3, text: 'Gamma', color: 'lightgreen' },
          { key: 4, text: 'Delta', color: 'pink' },
        ],
        linkDataArray: [
          { from: 1, to: 2 },
          { from: 1, to: 3 },
          { from: 3, to: 4 },
        ],
      },
      currentNode: null,
      savedModelText: '',
      counter: 1, // used by addNode
      counter2: 4, // used by modifyStuff
    },
    computed: {
      currentNodeText: {
        get() {
          const node = this.currentNode;
          if (node instanceof go.Node) {
            return node.data.text;
          } else {
            return '';
          }
        },
        set(val) {
          const node = this.currentNode;
          if (node instanceof go.Node) {
            const model = this.model();
            model.startTransaction();
            model.setDataProperty(node.data, 'text', val);
            model.commitTransaction('edited text');
          }
        },
      },
    },
    methods: {
      // get access to the GoJS Model of the GoJS Diagram
      model() { return this.$refs.diag.model(); },

      // tell the GoJS Diagram to update based on the arbitrarily modified model data
      updateDiagramFromData() { this.$refs.diag.updateDiagramFromData(); },

      // this event listener is declared on the
      modelChanged(e) {
        if (e.isTransactionFinished) { // show the model data in the page's TextArea
          this.savedModelText = e.model.toJson();
        }
      },

      changedSelection(e) {
        const node = e.diagram.selection.first();
        if (node instanceof go.Node) {
          this.currentNode = node;
          this.currentNodeText = node.data.text;
        } else {
          this.currentNode = null;
          this.currentNodeText = '';
        }
      },

      // Here we modify the GoJS Diagram's Model using its methods,
      // which can be much more efficient than modifying some memory and asking
      // the GoJS Diagram to find differences and update accordingly.
      // Undo and Redo will work as expected.
      addNode() {
        const model = this.model();
        model.startTransaction();
        model.setDataProperty(model.findNodeDataForKey(4), 'color', 'purple');
        const data = { text: `NEW ${ this.counter++}`, color: 'yellow' };
        model.addNodeData(data);
        model.addLinkData({ from: 3, to: model.getKeyForNodeData(data) });
        model.commitTransaction('added Node and Link');
        // also manipulate the Diagram by changing its Diagram.selection collection
        const { diagram } = this.$refs.diag;
        diagram.select(diagram.findNodeForData(data));
      },

      // Here we modify VUE's view model directly, and
      // then ask the GoJS Diagram to update everything from the data.
      // This is less efficient than calling the appropriate GoJS Model methods.
      // NOTE: Undo will not be able to restore all of the state properly!!
      modifyStuff() {
        const data = this.diagramData;
        data.nodeDataArray[0].color = 'red';
        // Note here that because we do not have the GoJS Model,
        // we cannot find out what values would be unique keys, for reference by the link data.
        data.nodeDataArray.push({ key: ++this.counter2, text: this.counter2.toString(), color: 'orange' });
        data.linkDataArray.push({ from: 2, to: this.counter2 });
        this.updateDiagramFromData();
      },
    },
  });
}
