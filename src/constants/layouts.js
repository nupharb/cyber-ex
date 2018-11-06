const marginBetweenCells = [10, 10];
const containerPadding = [10, 10];

const layouts = [
  {
    id: 1,
    gridLayout: {
      cols: 2,
      rowHeight: 50,
      margin: marginBetweenCells,
      containerPadding: containerPadding,
      layout: [{
          component: 3, 
          innerLayout: {x: 0, y: 0, w: 2, h: 1, static: true}
        }, {
          component: 3,
          innerLayout: {x: 0, y: 1, w: 1, h: 2, static: true}
        }, {
          component: 3,
          innerLayout: {x: 1, y: 1, w: 1, h: 2, static: true}
        }, {
          component: 3,
          innerLayout: {x: 0, y: 3, w: 2, h: 2, static: true}
        }, {
          component: 3,
          innerLayout: {x: 0, y: 5, w: 2, h: 1, static: true}
        }
      ]
    }
  }, {
    id: 2,
    gridLayout: {
      cols: 1,
      rowHeight: 50,
      margin: marginBetweenCells,
      containerPadding: containerPadding,
      layout: [{
        component: 3, 
        innerLayout: {x: 0, y: 0, w: 1, h: 1, static: true}
      }, { 
        component: 3,
        innerLayout: {x: 0, y: 1, w: 1, h: 3, static: true}
      }, {
        component: 3,
        innerLayout: {x: 0, y: 4, w: 1, h: 2, static: true}
      }]
    }
  }, {
    id: 3,
    gridLayout: {
      cols: 8,
      rowHeight: 30,
      margin: marginBetweenCells,
      containerPadding: containerPadding,
      layout: [{
        component: 3,
        innerLayout: {x: 0, y: 0, w: 5, h: 2, static: true}
      }, {
        component: 3,
        innerLayout: {x: 5, y: 0, w: 2, h: 2, static: true}
      }, {
        component: 3,
        innerLayout: {x: 7, y: 0, w: 1, h: 2, static: true}
      }]
    }
  }, {
    id: 4,
    gridLayout: {
      cols: 8,
      rowHeight: 30,
      margin: marginBetweenCells,
      containerPadding: containerPadding,
      layout: [{
        component:  3,
        innerLayout: {x: 0, y: 0, w: 5, h: 2, static: true}
      }, {
        component: 3,
        innerLayout: {x: 5, y: 0, w: 2, h: 2, static: true}
      }, {
        component: 3,
        innerLayout: {x: 7, y: 0, w: 1, h: 2, static: true}
      }]
    }
  }
];

export default layouts;


