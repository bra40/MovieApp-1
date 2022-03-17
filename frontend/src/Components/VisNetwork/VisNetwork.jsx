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

// some globals to help with user input
let id1ToAddEdge = '';
let id2ToAddEdge = '';
let movieIdToAdd = '';
let movieNameToAdd = '';
  
  // Initialize your network!
  class VisNetwork extends Component {
    constructor() {
      super();

      this.state = {
        userInput: '',
        isNodeButtonClicked: false,
        isEdgeButtonClicked: false,
      }
  
      this.onNodeButtonClicked = this.onNodeButtonClicked.bind(this);
      this.onEdgeButtonClicked = this.onEdgeButtonClicked.bind(this);
      this.onInputChange = this.onInputChange.bind(this);

      this.network = {};
      this.appRef = createRef();
    }

    // updates whether or not the Add Node button was clicked and adds a node
    onNodeButtonClicked() {
      this.setState(prevState => ({
        isNodeButtonClicked: !prevState.isNodeButtonClicked,
      }));

      if(this.state.isNodeButtonClicked == true) {
        nodes.add([
          {id: movieIdToAdd, label: movieNameToAdd}
        ]);
      }
    }

    // updates whether or not the Add Edge button was clicked and adds an edge
    onEdgeButtonClicked() {
      this.setState(prevState => ({
        isEdgeButtonClicked: !prevState.isEdgeButtonClicked
      }));

      if(this.state.isEdgeButtonClicked == true) {
        edges.add([
          {from: id1ToAddEdge, to: id2ToAddEdge}
        ]);
      }
    }
  
    // updates the current state of the text boxes
    onInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.className;

      if(name == 'id1') {
        id1ToAddEdge = value;
      }
      else if(name == 'id2') {
        id2ToAddEdge = value;
      }
      else if(name == 'movieId') {
        movieIdToAdd = value;
      }
      else if(name == 'movieName') {
        movieNameToAdd = value;
      }
    }
  
    componentDidMount() {
      this.network = new Network(this.appRef.current, data, options);
    }
    
    render() {
      let containerStyle = {  //define container width and height.
        width:"500px",
        height:"500px",
      }

      window.onresize = function() {
        setInterval(function() {
          Network.fit();
        }, 2000);
      };
      
      return (
        <div className="visNetwork">
          <div className="wrapper">
            <div style={containerStyle} ref={this.appRef} />   
          </div>

          <div className="container">
            <button className='addNode' onClick={this.onNodeButtonClicked}>
              {this.state.isNodeButtonClicked ? 'Done' : 'Add Node'}
            </button>

            <button className='addEdge' onClick={this.onEdgeButtonClicked}>
              {this.state.isEdgeButtonClicked ? 'Done' : 'Add Edge'}
            </button>
          </div>

          <div className={"container " + (this.state.isEdgeButtonClicked && 'active')}>
            <input type='text' className='id1' placeholder='Enter first node to add edge' onChange={this.onInputChange}></input>
            <input type='text' className='id2' placeholder='Enter second node to add edge' onChange={this.onInputChange}></input>
          </div>

          <div className={"container " + (this.state.isNodeButtonClicked && 'active')}>
            <input type='text' className='movieName' placeholder='Enter the move name' onChange={this.onInputChange}></input>
            <input type='text' className='movieId' placeholder='Enter the movie ID' onChange={this.onInputChange}></input>
          </div>
        </div>
      );
    }
  }
  
  export default VisNetwork;