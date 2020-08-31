import React, { Component } from 'react';
import Board from './Board';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xIsNext: true,
      stepNumber: 0,
      history: [
        { squares: Array(9).fill(null) }
      ]

    }
  }
  handleClick(i) {
    const history
  }


  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];



    return (
      <div className="game">
        <div className="game-board">
          <Board onClick={(i) => this.handleClick(i)}
            squares={current.squares} />

        </div>
      </div>
    )
  }
}