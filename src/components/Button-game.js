import React, { Component } from "react";

const random = Math.floor(Math.random() * 3);
class Button extends Component {
  refreshPage() {
    window.location.reload();
  }

  createButtons = () => {
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
    return buttons;
  };
  render() {
    return (
      <div className="div_game">
        <h1>Guess the button</h1>
        <h2>Have fun!</h2>
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

export default Button;
