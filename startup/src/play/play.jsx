import React from 'react';
import './play.css';
import { Players } from './players';
import { GameNotifier, GameEvent } from './gameNotifier';

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
  }, []);

  async function resetGame() {
    const words = ["apple", "grape", "flame", "brick", "plane"];
    const newWord = words[Math.floor(Math.random() * words.length)];
    setWord(newWord);
    setDisplayedWord("_".repeat(newWord.length).split(""));
    setGuessedLetters([]);
    setStrikes(0);
    setMessage("");

    // Notify other players a new game has started
    console.log("new game has started:");
    GameNotifier.broadcastEvent(userName, GameEvent.Start, {});
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

      if (!updatedWord.includes("_")) {
        setMessage("You win! 🎉");
        await saveScore(newGuessedLetters.length);
        return;
      }
    } else {
      setMessage("Incorrect guess!");
      const newStrikes = strikes + 1;
      setStrikes(newStrikes);

      if (newStrikes >= maxStrikes) {
        setMessage(`You lose! The word was "${word}".`);
        await saveScore(newGuessedLetters.length - 1);
        return;
      }
    }
  };

  async function saveScore(score) {
    const date = new Date().toLocaleDateString();
    const newScore = { name: userName, score: score, date: date };

    await fetch('/api/score', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newScore),
    });

    // Notify others the game has ended
    GameNotifier.broadcastEvent(userName, GameEvent.End, newScore);
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
        <span className={`strike ${strikes > 0 ? "active" : ""}`}>|</span>
        <span className={`strike ${strikes > 1 ? "active" : ""}`}>|</span>
        <span className={`strike ${strikes > 2 ? "active" : ""}`}>|</span>
        <span className={`strike ${strikes > 3 ? "active" : ""}`}>|</span>
        <span className={`strike-fifth ${strikes > 4 ? "active" : ""}`}>|</span>
      </div>

      <div className="message" id="message">{message}</div>

      <Players userName={userName} /> {/* Add Players component */}

      <button className="btn btn-secondary" onClick={resetGame}>Reset Game</button>
    </main>
  );
}