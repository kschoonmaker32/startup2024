# 5 Strikes and You're Out

## Elevator Pitch
Tired of the usual word-guessing games? **5 Strikes and You're Out** offers a fresh twist! In this single-player game, you guess letters to reveal a hidden word, but you only get five incorrect guesses before you're out. Tally marks appear for each wrong guess—five strikes and the game is over. Track your scores and aim to beat your previous best!

## Design
![homepage](https://github.com/user-attachments/assets/14978670-3b62-45b4-a971-e194c17e692a)
![play](https://github.com/user-attachments/assets/653d341c-7fa7-4fe4-8e1a-652fd874f418)
![scoreboard](https://github.com/user-attachments/assets/c3c1c4d0-63c1-4a9e-b9e4-8a8b201ddd1d)
![about](https://github.com/user-attachments/assets/cd5bd1be-8fe8-4926-9545-cf3300b27caf)

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
- **Styling**: I implemented the CSS code to display all of the styling of the website such as the theme, the layout, and the visual elements to create a visually engaging setup for users to look at.
- **Theme**: I made the theme of the website purple and white to make it stand out from other websites but also keep users engaged with bright colors.
- **Layout**: The layout is designed so the text and website content is centered in the middle of each webpage. This adds a professional appeal to the site as well as making it look neat.
- **Visual Elements**: Despite the tally marks being the most time consuming and confusing part of the implementation so far, they add a unique visual element that communicates the player's progress and adds to the interactive experience. The buttons were also designed to be engaging and fun for players to use during login and gameplay.

### JavaScript
- **Interactivity**: JavaScript will manage the game logic, including checking guesses, revealing letters in the word, and updating the tally marks when incorrect guesses are made.
- **Word Retrieval**: JavaScript will call a backend service to retrieve a random word from a predefined wordlist.
- **Score Tracking**: JavaScript will handle score calculation and display the player's score at the end of the game.

### React
- **Components**: The application is modular, with reusable and well-structured components for streamlined development and maintainability. Components handle tasks like displaying data and visual elements with clear css.
- **Routing**: React Router now navigates between the login page, game page, and score page without reloading the browser providing smooth transitions.

### Web Service/3rd party
- **Backend Services**: The backend will provide services that handle:
  - `about': the game will grab a random photo from a 3rd party api and display it on the about page.
### Authentication
- **User Login**: Website allows and prompts users to login to play the game, however they have the option to play it without logging in as well.

### Database Data
- **Persistent Data**: Player credentials will be stored in the database allowing for easy authentication.

### WebSocket
- **Single Player**: Players are notified when a new game is started by websocket embedded in backend of website.
