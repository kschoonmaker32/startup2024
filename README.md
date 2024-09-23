# Connect four

## Elevator Pitch

Are you ever waiting in a long line with nothing to do? Do you ever need something to do on your phone when you're stopped at a traffic light? Haha, just kidding. Connect four is perfect for a quick game break during any day. You can even play with your friends! This classic game is a game that you can play on a roadtrip, in a restaurant, on vacation, in your own home, and anywhere else you can think of. 

## Design
![image](https://github.com/user-attachments/assets/c56b06e0-6c40-42c1-b08e-f7f0f9a51f56)

![image](https://github.com/user-attachments/assets/71567f23-73f8-4ecf-acb4-7d8f5ffe74d6)

# Key Features
- Login page for easy access to your account
- Gameplay page
- Stopwatch to keep track of elapsed time during game


# Technologies
I am going to use the required technologies in the following ways:
- HTML: Uses correct HTML structure for application. Two HTML pages. One for beginning login screen, and one for actual game play.
- CSS - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
- React - Provides login, gameplay display, and updates game from user input on both ends
- Service - Backend service with endpoints for:
    - Login
    - Retrieving user input on their turn
    - Update game status
 - DB/Login: Store users in database. Register and login users. Credentials securely stored in database. Can't vote unless authenticated.
 - WebSocket - As each player takes a turn, the game is updated to show the results of the game.

## HTML deliverable

For this deliverable I built out the structure of my application using HTML.

- [x] **HTML pages** - Two HTML page that represent the ability to login and play the game.
- [x] **Links** - The login page automatically links to the gameplay. 
- [x] **Text** - Small description of how to play the game
- [ ] **Images** - No images 
- [x] **DB/Login** - Input box and submit button for login. 
- [x] **WebSocket** - The gameplay is updated after each turn.

## CSS deliverable

For this deliverable I properly styled the application into its final appearance.

- [x] **Header, footer, and main content body**
- [x] **Navigation elements** - Not much to navigate
- [x] **Responsive to window resizing** - App will adapt to screensize
- [x] **Application elements** - Used good contrast and whitespace
- [x] **Application text content** - Consistent fonts
- [ ] **Application images** - Still don't have images

## React deliverable

I will use react

- [x] **Components** - Login, gameplay
  - [x] **login** - When you press enter or the login button it takes you to the gameplay page.
  - [x] **database** - Displays the winning user as soon as gameplay is complete.
  - [x] **WebSocket** - Not sure yet
  - [x] **application logic** - The game 
- [x] **Router** - Routing between login and gameplay

## Service deliverable

- [x] **Node.js/Express HTTP service** - not sure yet
- [x] **Static middleware for frontend** - not sure yet
- [ ] **Calls to third party endpoints** - not sure yet
- [x] **Backend service endpoints** - Placeholders for login that stores the current user on the server. 

## DB/Login deliverable

For this deliverable I associate the game inputs with the logged in user. 

- [x] **MongoDB Atlas database created** - not sure yet
- [x] **Stores data in MongoDB** - not sure yet
- [x] **User registration** - Creates a new account in the database.
- [x] **existing user** - Still am thinking of what to do with this
- [x] **Use MongoDB to store credentials** - not sure yet
- [ ] **Restricts functionality** - You cannot play the game until you log in

## WebSocket deliverable

For this deliverable I used webSocket to update the votes on the frontend in realtime.

- [x] **Backend listens for WebSocket connection** - not sure yet
- [x] **Frontend makes WebSocket connection** - not sure yet
- [x] **Data sent over WebSocket connection** - not sure yet
- [x] **WebSocket data displayed** - make sure gameplay is updated as soon as player takes turn
