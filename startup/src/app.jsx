import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scoreboard } from './scoreboard/scoreboard';
import { About } from './about/about';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);
  return (
    <BrowserRouter>
    <div className='body bg-purple text-light'>
      <header className='container-fluid'>
        <nav className='navbar fixed-top navbar-dark'>
          <div className='navbar-brand'>
            5 Strikes
          </div>
          <menu className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' to=''>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='play'>
                Play
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='scoreboard'>
                Scoreboard
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='About'>
                About
              </NavLink>
            </li>
          </menu>
        </nav>
      </header>

    <Routes>
    <Route
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
      <Route path='/play' element={<Play />} />
      <Route path='/scoreboard' element={<Scoreboard />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<NotFound />} />
    </Routes>

      <footer className="footer bg-light">
      <div className="container-fluid">
        <span><b>Access Github page here:</b> </span>
        <span> <a href="https://github.com/kschoonmaker32/startup2024"> Kendra's Github</a></span>
      </div>
    </footer>
  </div>
  </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-purple text-center'>404: Return to sender. Address unknown.</main>;
}
