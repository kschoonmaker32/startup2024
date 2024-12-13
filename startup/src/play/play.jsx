import React from 'react';
import './play.css';
import { GameEventNotifier, GameEvent } from './gameNotifier';

export function Play(props) {
  const userName = props.userName;
  const [word, setWord] = React.useState("");
  const [displayedWord, setDisplayedWord] = React.useState([]);
  const [guessedLetters, setGuessedLetters] = React.useState([]);
  const [strikes, setStrikes] = React.useState(0);
  const maxStrikes = 5;
  const [message, setMessage] = React.useState("");

  // Initialize the game
  React.useEffect(() => {
    resetGame();
    GameEventNotifier.initializeWebSocket();
    console.log("game started");
  }, []);

  const resetGame = () => {
    const words = ["apple", "grape", "flame", "brick", "plane"];
    const newWord = words[Math.floor(Math.random() * words.length)];
    setWord(newWord);
    setDisplayedWord("_".repeat(newWord.length).split(""));
    setGuessedLetters([]);
    setStrikes(0);
    setMessage("");

    // Notify other players a new game has started
    GameEventNotifier.broadcastEvent(userName, GameEvent.Start, {});
  };

  const handleGuess = async (guess) => {
    if (guessedLetters.includes(guess)) {
      setMessage("You already guessed that letter!");
      return;
    }

    const newGuessedLetters = [...guessedLetters, guess];
    setGuessedLetters(newGuessedLetters);

    if (word.includes(guess)) {
      setMessage("Correct guess!");
      const updatedWord = displayedWord.map((char, idx) =>
        word[idx] === guess ? guess : char
      );
      setDisplayedWord(updatedWord);

      // Notify other players of a correct guess
      GameNotifier.broadcastEvent(userName, GameEvent.Guess, { guess, correct: true });

      if (!updatedWord.includes("_")) {
        setMessage("You win! 🎉");
        await saveScore(newGuessedLetters.length);
        return;
      }
    } else {
      setMessage("Incorrect guess!");
      const newStrikes = strikes + 1;
      setStrikes(newStrikes);

      // Notify other players of an incorrect guess
      GameNotifier.broadcastEvent(userName, GameEvent.Guess, { guess, correct: false });

      if (newStrikes >= maxStrikes) {
        setMessage(`You lose! The word was "${word}".`);
        await saveScore(newGuessedLetters.length - 1);
        return;
      }
    }
  };

  const saveScore = async (score) => {
    const date = new Date().toLocaleDateString();
    const newScore = { name: userName, score: score, date: date };

    await fetch('/api/score', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newScore),
    });

    // Notify others the game has ended
    GameEventNotifier.broadcastEvent(userName, GameEvent.End, newScore);
    console.log("game ended");
  };

  const onGuessSubmit = (event) => {
    event.preventDefault();
    const guessInput = document.getElementById("guessInput");
    const guess = guessInput.value.toLowerCase();

    if (!guess || guess.length !== 1 || !/[a-z]/.test(guess)) {
      setMessage("Please enter a valid letter!");
      return;
    }

    handleGuess(guess);
    guessInput.value = "";
  };

  const handleGameEvent = (event) => {
    if (event.type === GameEvent.Guess) {
      console.log(`Player guessed: ${event.value.guess} (Correct: ${event.value.correct})`);
    } else if (event.type === GameEvent.Start) {
      console.log("A new game has started.");
    } else if (event.type === GameEvent.End) {
      console.log("Game ended. Final score:", event.value.score);
    }
  };

  return (
    <main className="bg-purple">
      <h1>5 Strikes and You're Out!</h1>
      <div className="word" id="wordDisplay">
        <span className="big-text">{displayedWord.join(" ")}</span>
      </div>

      <div className="input-container">
        <label htmlFor="guessInput">Guess a letter:</label>
        <form onSubmit={onGuessSubmit}>
          <input type="text" id="guessInput" maxLength="1" />
          <button type="submit" className="btn btn-primary">Guess</button>
        </form>
      </div>

      <div className="tally-container">
        {[...Array(maxStrikes)].map((_, index) => (
          <span
            key={index}
            className={`strike ${strikes > index ? "active" : ""}`}
          >
            |
          </span>
        ))}
      </div>

      <div className="message" id="message">{message}</div>

      <div className="scoreboard">
        <h2>Global scoreboard</h2>
        <p id="globalScore">Top Score: 10</p>
      </div>

      <button className="btn btn-secondary" onClick={resetGame}>Reset Game</button>
    </main>
  );
}
