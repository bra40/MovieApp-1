import React, { Component } from 'react'
import "./userPage.scss"

export default class UserPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      isButtonClicked: false,
    }

    this.onButtonClicked = this.onButtonClicked.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onButtonClicked() {
    this.setState(prevState => ({
      isButtonClicked: !prevState.isButtonClicked,
    }));
  }

  // updates the current state of the text box
  onInputChange(event) {
    const target = event.target;
    const value = target.value;

    this.setState({
      userInput: value
    });

    //console.log(this.state.userInput);
  }

  render() {
    return (
      <div className={"userPage " + (this.state.isButtonClicked && 'active')}>
        <div className="wrapper">
          <button onClick={this.onButtonClicked}>
            {this.state.isButtonClicked ? 'Done' : 'Add Node'}
          </button>
        </div>

        <div className="wrapper">
          <input type='text' placeholder='Enter the movie ID' onChange={this.onInputChange}></input>
        </div>
      </div>
    )
  }
}

