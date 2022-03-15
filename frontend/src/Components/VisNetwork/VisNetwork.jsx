import React, { Component, createRef } from "react";
import { DataSet, Network } from 'vis-network/standalone/umd/vis-network.min';
import './visNetwork.scss';

// Network.on("click", function (params) {
//   // This block added
//   var tmpEvent = params.event.changedPointers[0];
//   var toCanvas = Network.DOMtoCanvas({x:tmpEvent.offsetX, y:tmpEvent.offsetY});
//   console.log('event offsetXY: ' + tmpEvent.offsetX + ', ' + tmpEvent.offsetY);
//   console.log(toCanvas);
//   // End added

//   params.event = "[original event]";
//   document.getElementById('eventSpan').innerHTML = '<h2>Click event:</h2>' + JSON.stringify(params, null, 4);
//   console.log('click event, getNodeAt returns: ' + this.getNodeAt(params.pointer.DOM));
// });

// Create an array with nodes
const nodes = new DataSet([
    {id: 1, label: 'Film 1'},
    {id: 2, label: 'Film 2'},
    {id: 3, label: 'Film 3'},
    {id: 4, label: 'Film 4'},
    {id: 5, label: 'Film 5'}
]);

// Create an array with edges
const edges = new DataSet([
    {from: 1, to: 3},
    {from: 1, to: 2},
    {from: 2, to: 4},
    {from: 2, to: 5}
]);

// Provide the data in the vis format
const data = {
  nodes: nodes,
  edges: edges
};

const options = {
    autoResize: true,
    height: '100%',
    width: '100%'    
  };
  
  // Initialize your network!
  class VisNetwork extends Component {
    constructor() {
    super();
    this.network = {};
    this.appRef = createRef();
  }
  
  componentDidMount() {
    this.network = new Network(this.appRef.current, data, options);
  }
  
  render() {
  
  let containerStyle = {  //define container width and height.
     width:"400px",
     height:"400px"
  }

  window.onresize = function() {
    setInterval(function() {
      Network.fit();
    }, 2000);
  };
  
  return (
     <div style={containerStyle} ref={this.appRef} />   
  );
  }
  }
  
  export default VisNetwork;