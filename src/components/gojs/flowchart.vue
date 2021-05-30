<template>
  <div id="myDiagramDiv">
    <div id="mySavedModel">
      111
    </div>
  </div>
</template>

<script>
  import go from 'gojs';

  export default {
    name: 'GojsComponent',
    data() {
      return {
        $Go: null,
        myDiagram: null,
        isSaveBtnDisable: false,
      };
    },
    created() {},
    mounted() {
      this.$Go = go.GraphObject.make;
      this.myDiagram = this.$Go(
        go.Diagram,
        'myDiagramDiv', // must name or refer to the DIV HTML element
        {
          LinkDrawn: this.showLinkLabel, // this DiagramEvent listener is defined below
          LinkRelinked: this.showLinkLabel,
          'undoManager.isEnabled': true, // enable undo & redo
        },
      );

      // when the document is modified, add a "*" to the title and enable the "Save" button
      // 有改动的情况 保存按钮 可点击 且document.title 增加 * 提示当前未保存；没有改动的情况 则不可点击
      this.myDiagram.addDiagramListener('Modified', (e) => this.saveBtnStatus(e));

      this.myDiagram.nodeTemplateMap.add(
        '', // the default category
        this.$Go(
          go.Node,
          'Table',
          this.nodeStyle(),
          // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
          this.$Go(
            go.Panel,
            'Auto',
            this.$Go(
              go.Shape,
              'Rectangle',
              { fill: '#282c34', stroke: '#00A9C9', strokeWidth: 3.5 },
              new go.Binding('figure', 'figure'),
            ),
            this.$Go(
              go.TextBlock,
              this.textStyle(),
              {
                margin: 8,
                maxSize: new go.Size(160, NaN),
                wrap: go.TextBlock.WrapFit,
                editable: true,
              },
              new go.Binding('text').makeTwoWay(),
            ),
          ),
          // four named ports, one on each side:
          this.makePort('T', go.Spot.Top, go.Spot.TopSide, false, true),
          this.makePort('L', go.Spot.Left, go.Spot.LeftSide, true, true),
          this.makePort('R', go.Spot.Right, go.Spot.RightSide, true, true),
          this.makePort('B', go.Spot.Bottom, go.Spot.BottomSide, true, false),
        ),
      );

      this.myDiagram.nodeTemplateMap.add(
        'Conditional',
        this.$Go(
          go.Node,
          'Table',
          this.nodeStyle(),
          // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
          this.$Go(
            go.Panel,
            'Auto',
            this.$Go(
              go.Shape,
              'Diamond',
              { fill: '#282c34', stroke: '#00A9C9', strokeWidth: 3.5 },
              new go.Binding('figure', 'figure'),
            ),
            this.$Go(
              go.TextBlock,
              this.textStyle(),
              {
                margin: 8,
                maxSize: new go.Size(160, NaN),
                wrap: go.TextBlock.WrapFit,
                editable: true,
              },
              new go.Binding('text').makeTwoWay(),
            ),
          ),
          // four named ports, one on each side:
          this.makePort('T', go.Spot.Top, go.Spot.Top, false, true),
          this.makePort('L', go.Spot.Left, go.Spot.Left, true, true),
          this.makePort('R', go.Spot.Right, go.Spot.Right, true, true),
          this.makePort('B', go.Spot.Bottom, go.Spot.Bottom, true, false),
        ),
      );

      this.myDiagram.nodeTemplateMap.add(
        'Start',
        this.$Go(
          go.Node,
          'Table',
          this.nodeStyle(),
          this.$Go(
            go.Panel,
            'Spot',
            this.$Go(go.Shape, 'Circle', {
              desiredSize: new go.Size(70, 70),
              fill: '#282c34',
              stroke: '#09d3ac',
              strokeWidth: 3.5,
            }),
            this.$Go(
              go.TextBlock,
              'Start',
              this.textStyle(),
              new go.Binding('text'),
            ),
          ),
          // three named ports, one on each side except the top, all output only:
          this.makePort('L', go.Spot.Left, go.Spot.Left, true, false),
          this.makePort('R', go.Spot.Right, go.Spot.Right, true, false),
          this.makePort('B', go.Spot.Bottom, go.Spot.Bottom, true, false),
        ),
      );

      this.myDiagram.nodeTemplateMap.add(
        'End',
        this.$Go(
          go.Node,
          'Table',
          this.nodeStyle(),
          this.$Go(
            go.Panel,
            'Spot',
            this.$Go(go.Shape, 'Circle', {
              desiredSize: new go.Size(60, 60),
              fill: '#282c34',
              stroke: '#DC3C00',
              strokeWidth: 3.5,
            }),
            this.$Go(
              go.TextBlock,
              'End',
              this.textStyle(),
              new go.Binding('text'),
            ),
          ),
          // three named ports, one on each side except the bottom, all input only:
          this.makePort('T', go.Spot.Top, go.Spot.Top, false, true),
          this.makePort('L', go.Spot.Left, go.Spot.Left, false, true),
          this.makePort('R', go.Spot.Right, go.Spot.Right, false, true),
        ),
      );

      // taken from ../extensions/Figures.js:
      go.Shape.defineFigureGenerator('File', (shape, w, h) => {
        const geo = new go.Geometry();
        const fig = new go.PathFigure(0, 0, true); // starting point
        geo.add(fig);
        fig.add(new go.PathSegment(go.PathSegment.Line, 0.75 * w, 0));
        fig.add(new go.PathSegment(go.PathSegment.Line, w, 0.25 * h));
        fig.add(new go.PathSegment(go.PathSegment.Line, w, h));
        fig.add(new go.PathSegment(go.PathSegment.Line, 0, h).close());
        const fig2 = new go.PathFigure(0.75 * w, 0, false);
        geo.add(fig2);
        // The Fold
        fig2.add(new go.PathSegment(go.PathSegment.Line, 0.75 * w, 0.25 * h));
        fig2.add(new go.PathSegment(go.PathSegment.Line, w, 0.25 * h));
        geo.spot1 = new go.Spot(0, 0.25);
        geo.spot2 = go.Spot.BottomRight;
        return geo;
      });

      this.myDiagram.nodeTemplateMap.add(
        'Comment',
        this.$Go(
          go.Node,
          'Auto',
          this.nodeStyle(),
          this.$Go(go.Shape, 'File', {
            fill: '#282c34',
            stroke: '#DEE0A3',
            strokeWidth: 3,
          }),
          this.$Go(
            go.TextBlock,
            this.textStyle(),
            {
              margin: 8,
              maxSize: new go.Size(200, NaN),
              wrap: go.TextBlock.WrapFit,
              textAlign: 'center',
              editable: true,
            },
            new go.Binding('text').makeTwoWay(),
          ),
        // no ports, because no links are allowed to connect with a comment
        ),
      );

      // replace the default Link template in the linkTemplateMap
      this.myDiagram.linkTemplate = this.$Go(
        go.Link, // the whole link panel
        {
          routing: go.Link.AvoidsNodes,
          curve: go.Link.JumpOver,
          corner: 5,
          toShortLength: 4,
          relinkableFrom: true,
          relinkableTo: true,
          reshapable: true,
          resegmentable: true,
          // mouse-overs subtly highlight links:
          mouseEnter(e, link) {
            link.findObject('HIGHLIGHT').stroke = 'rgba(30,144,255,0.2)';
          },
          mouseLeave(e, link) {
            link.findObject('HIGHLIGHT').stroke = 'transparent';
          },
          selectionAdorned: false,
        },
        new go.Binding('points').makeTwoWay(),
        this.$Go(
          go.Shape, // the highlight shape, normally transparent
          {
            isPanelMain: true,
            strokeWidth: 8,
            stroke: 'transparent',
            name: 'HIGHLIGHT',
          },
        ),
        this.$Go(
          go.Shape, // the link path shape
          { isPanelMain: true, stroke: 'gray', strokeWidth: 2 },
          new go.Binding('stroke', 'isSelected', (sel) => {
            return sel ? 'dodgerblue' : 'gray';
          }).ofObject(),
        ),
        this.$Go(
          go.Shape, // the arrowhead
          { toArrow: 'standard', strokeWidth: 0, fill: 'gray' },
        ),
        this.$Go(
          go.Panel,
          'Auto', // the link label, normally not visible
          {
            visible: false,
            name: 'LABEL',
            segmentIndex: 2,
            segmentFraction: 0.5,
          },
          new go.Binding('visible', 'visible').makeTwoWay(),
          this.$Go(
            go.Shape,
            'RoundedRectangle', // the label shape
            { fill: '#F8F8F8', strokeWidth: 0 },
          ),
          this.$Go(
            go.TextBlock,
            'Yes', // the label
            {
              textAlign: 'center',
              font: '10pt helvetica, arial, sans-serif',
              stroke: '#333333',
              editable: true,
            },
            new go.Binding('text').makeTwoWay(),
          ),
        ),
      );
      // temporary links used by LinkingTool and RelinkingTool are also orthogonal:
      this.myDiagram.toolManager.linkingTool.temporaryLink.routing =
        go.Link.Orthogonal;
      this.myDiagram.toolManager.relinkingTool.temporaryLink.routing =
        go.Link.Orthogonal;
      this.load(); // load an initial diagram from some JSON text

      // initialize the Palette that is on the left side of the page
      this.myPalette =
        this.$Go(go.Palette, 'myPaletteDiv', // must name or refer to the DIV HTML element
                 {
                   // Instead of the default animation, use a custom fade-down
                   'animationManager.initialAnimationStyle': go.AnimationManager.None,
                   InitialAnimationStarting: this.animateFadeDown, // Instead, animate with this function

                   nodeTemplateMap: this.myDiagram.nodeTemplateMap, // share the templates used by myDiagram
                   model: new go.GraphLinksModel([ // specify the contents of the Palette
                     { category: 'Start', text: 'Start' },
                     { text: 'Step' },
                     { category: 'Conditional', text: '???' },
                     { category: 'End', text: 'End' },
                     { category: 'Comment', text: 'Comment' },
                   ]),
                 });
    },
    methods: {
      load() {
        this.myDiagram.model = go.Model.fromJson(
          document.getElementById('mySavedModel').value,
        );
      },
      // This is a re-implementation of the default animation, except it fades in from downwards, instead of upwards.
      animateFadeDown(e) {
        const { diagram } = e;
        const animation = new go.Animation();
        animation.isViewportUnconstrained = true; // So Diagram positioning rules let the animation start off-screen
        animation.easing = go.Animation.EaseOutExpo;
        animation.duration = 900;
        // Fade "down", in other words, fade in from above
        animation.add(diagram, 'position', diagram.position.copy().offset(0, 200), diagram.position);
        animation.add(diagram, 'opacity', 0, 1);
        animation.start();
      },
      // Show the diagram's model in JSON format that the user may edit
      save() {
        document.getElementById('mySavedModel').value = this.myDiagram.model.toJson();
        this.myDiagram.isModified = false;
      },
      // Make link labels visible if coming out of a "conditional" node.
      // This listener is called by the "LinkDrawn" and "LinkRelinked" DiagramEvents.
      showLinkLabel(e) {
        const label = e.subject.findObject('LABEL');
        if (label !== null) label.visible = e.subject.fromNode.data.category === 'Conditional';
      },
      saveBtnStatus(e) {
        this.isSaveBtnDisable = !this.myDiagram.isModified;
        const idx = document.title.indexOf('*');
        if (this.myDiagram.isModified) {
          if (idx < 0) document.title += '*';
        } else if (idx >= 0) document.title = document.title.substr(0, idx);
      },
      nodeStyle() {
        return [
          // The Node.location comes from the "loc" property of the node data,
          // converted by the Point.parse static method.
          // If the Node.location is changed, it updates the "loc" property of the node data,
          // converting back using the Point.stringify static method.
          new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(
            go.Point.stringify,
          ),
          {
            // the Node.location is at the center of each node
            locationSpot: go.Spot.Center,
          },
        ];
      },
      makePort(name, align, spot, output, input) {
        const horizontal =
          align.equals(go.Spot.Top) || align.equals(go.Spot.Bottom);
        // the port is basically just a transparent rectangle that stretches along the side of the node,
        // and becomes colored when the mouse passes over it
        return this.$Go(go.Shape, {
          fill: 'transparent', // changed to a color in the mouseEnter event handler
          strokeWidth: 0, // no stroke
          width: horizontal ? NaN : 8, // if not stretching horizontally, just 8 wide
          height: !horizontal ? NaN : 8, // if not stretching vertically, just 8 tall
          alignment: align, // align the port on the main Shape
          stretch: horizontal
            ? go.GraphObject.Horizontal
            : go.GraphObject.Vertical,
          portId: name, // declare this object to be a "port"
          fromSpot: spot, // declare where links may connect at this port
          fromLinkable: output, // declare whether the user may draw links from here
          toSpot: spot, // declare where links may connect at this port
          toLinkable: input, // declare whether the user may draw links to here
          cursor: 'pointer', // show a different cursor to indicate potential link point
          mouseEnter(e, port) {
            // the PORT argument will be this Shape
            if (!e.diagram.isReadOnly) port.fill = 'rgba(255,0,255,0.5)';
          },
          mouseLeave(e, port) {
            port.fill = 'transparent';
          },
        });
      },
      textStyle() {
        return {
          font: 'bold 11pt Lato, Helvetica, Arial, sans-serif',
          stroke: '#F8F8F8',
        };
      },
      // print the diagram by opening a new window holding SVG images of the diagram contents for each page
      printDiagram() {
        const svgWindow = window.open();
        if (!svgWindow) return; // failure to open a new Window
        const printSize = new go.Size(700, 960);
        const bnds = this.myDiagram.documentBounds;
        let { x } = bnds;
        let { y } = bnds;
        while (y < bnds.bottom) {
          while (x < bnds.right) {
            const svg = this.myDiagram.makeSvg({
              scale: 1.0,
              position: new go.Point(x, y),
              size: printSize,
            });
            svgWindow.document.body.appendChild(svg);
            x += printSize.width;
          }
          x = bnds.x;
          y += printSize.height;
        }
        setTimeout(() => {
          svgWindow.print();
        }, 1);
      },
    },
  };
</script>
<style lang="scss" scoped></style>
