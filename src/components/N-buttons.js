import React, { Component } from "react";

class Nbuttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }
  refreshPage() {
    window.location.reload();
  }
  createButtons = () => {
    const random = Math.floor(Math.random() * this.state.inputValue);
    const buttons = [];
    for (let i = 0; i < this.state.inputValue; ++i) {
      buttons.push(
        <button
          className="button"
          key={i}
          onClick={() =>
            Number(buttons[i].key) === random
              ? alert("Correct!")
              : alert("Try another one!")
          }
        >
          Try me
        </button>
      );
    }
    console.log(buttons, random);
    return buttons;
  };
  updateInputValue(evt) {
    this.setState({ inputValue: evt.target.value });
  }
  render() {
    return (
      <div className="div_game ">
        <h1>Guess the button</h1>
        <h2>Have fun!</h2>
        <h3>Insert a number</h3>
        <div>
          <input
            type="number"
            value={this.state.inputValue}
            onChange={(evt) => this.updateInputValue(evt)}
          />
        </div>
        {this.createButtons()}
        <div>
          <button className="button" onClick={this.refreshPage}>
            Start Again
          </button>
        </div>
      </div>
    );
  }
}

export default Nbuttons;
