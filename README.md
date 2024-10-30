# 5 Strikes and You're Out

## Elevator Pitch
Tired of the usual word-guessing games? **5 Strikes and You're Out** offers a fresh twist! In this single-player game, you guess letters to reveal a hidden word, but you only get five incorrect guesses before you're out. Tally marks appear for each wrong guess—five strikes and the game is over. Track your scores and aim to beat your previous best!

## Design
https://github.com/kschoonmaker32/startup2024/blob/main/homepage.jpg?raw=true
https://github.com/kschoonmaker32/startup2024/blob/main/play.jpg?raw=true
https://github.com/kschoonmaker32/startup2024/blob/main/scoreboard.jpg?raw=true
https://github.com/kschoonmaker32/startup2024/blob/main/about.jpg?raw=true

## Key Features
- Secure login and high score tracking to challenge yourself and improve over time. 
- Random word generation from a predefined wordlist stored in the backend.
- Tally-based visual representation of wrong guesses—out after five strikes.
- Responsive design for both mobile and desktop devices.

## Technologies

### HTML
- **Structure**: HTML will manage the basic layout of the game, including the word display, input field for guesses, a bank of previously guessed letters, and tally mark section for incorrect guesses.
- **Pages**: The application will have a login page, game page, a scoreboard page, and an about page. Players can log in, play the game, and view their scores. They will receive one point for each correctly guess word. 

### CSS
- **Styling**: CSS will handle the design and layout of the game, including the buttons, word display, and the tally marks. 
- **Animations**: CSS will be used to animate tally marks as they are drawn with each incorrect guess, providing visual feedback for the player.

### JavaScript
- **Interactivity**: JavaScript will manage the game logic, including checking guesses, revealing letters in the word, and updating the tally marks when incorrect guesses are made.
- **Word Retrieval**: JavaScript will call a backend service to retrieve a random word from a predefined wordlist.
- **Score Tracking**: JavaScript will handle score calculation and display the player's score at the end of the game.

### React
- **Components**: React will be used to build modular components like the login screen, game interface, and tally mark display.
- **Routing**: React Router will navigate between the login page, game page, and score page without reloading the browser.

### Web Service/3rd party
- **Backend Services**: The backend will provide services that handle:
  - `login`: Authenticate users and manage their sessions.
  - `getWord`: Retrieve a random word from a 3rd party website to use as the word the user must guess.
  - `saveScore`: Store the player's score in the database at the end of each game.

### Authentication
- **User Login**: Players will need to log in to track their scores and view their game history. The player's profile will be displayed on the game page once logged in.

### Database Data
- **Persistent Data**: Player scores will be stored in a MongoDB database, allowing them to track their progress and challenge themselves to improve.
- **User Data**: Secure storage of user credentials and scores, allowing players to view their previous game data.

### WebSocket
- **Single Player**: Player scores will be updated in real time on the global leaderboard, and the leaderboard will be updated to show which player is in the lead.
