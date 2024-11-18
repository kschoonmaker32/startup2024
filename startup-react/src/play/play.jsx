import React from 'react';

export function Play() {
  return (
    <main className="bg-purple">
      <h1>5 Strikes and You're Out!</h1>
      <div className="word" id="wordDisplay">
      <span className="big-text">_ _ _ _ _</span>
      </div>

      <div className="input-container">
        <label for="guessInput">Guess a letter:</label>
        <input type="text" id="guessInput" maxlength="1"></input>
        <button type="makeGuess()" className="btn btn-primary">Guess</button>
      </div>

      <div className="tally-container">
        <span className="strike">|</span>
        <span className="strike">|</span>
        <span className="strike">|</span>
        <span className="strike">|</span>
        <span className="strike-fifth">|</span>
      </div>

      <div className="message" id="message"></div>

      <div className="scoreboard">
        <h2>Global scoreboard</h2>
        <p id="globalScore">Top Score:10</p>
      </div>
    </main>
  );
}