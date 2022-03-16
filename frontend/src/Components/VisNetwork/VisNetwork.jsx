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

let numNodes = 6;

const options = {
    autoResize: true,
    height: '100%',
    width: '100%'    
  };
  
  // Initialize your network!
  class VisNetwork extends Component {
    constructor() {
      super();

      this.state = {
        userInput: '',
        isButtonClicked: false,
        nodeNum: 6
      }
  
      this.onButtonClicked = this.onButtonClicked.bind(this);
      this.onInputChange = this.onInputChange.bind(this);

      this.network = {};
      this.appRef = createRef();
    }

    // updated whether or not the Add Node button was clicked
    onButtonClicked() {
      numNodes = numNodes + 1;

      this.setState(prevState => ({
        isButtonClicked: !prevState.isButtonClicked,
        nodeNum: numNodes
      }));

      nodes.add([
        {id: this.state.nodeNum, label: 'Film 6'}
      ]);
    }
  
    // updates the current state of the text box
    onInputChange(event) {
      const target = event.target;
      const value = target.value;
  
      this.setState({
        userInput: value
      });
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

          <div className="wrapper">
            <button onClick={this.onButtonClicked}>
              {this.state.isButtonClicked ? 'Done' : 'Add Node'}
            </button>
          </div>
        </div>
      );
    }
  }
  
  export default VisNetwork;