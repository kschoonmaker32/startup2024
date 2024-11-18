import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className='body bg-purple text-light'>
      <header className='container-fluid'>
        <nav className='navbar fixed-top navbar-dark'>
          <div className='navbar-brand'>
            5 Strikes
          </div>
          <menu className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href='index.html'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='play.html'>
                Play
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='scoreboard.html'>
                Scoreboard
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='about.html'>
                About
              </a>
            </li>
          </menu>
        </nav>
      </header>

      <main>App components go here</main>

      <footer className="footer bg-light">
      <div className="container-fluid">
        <span><b>Access Github page here:</b> </span>
        <span> <a href="https://github.com/kschoonmaker32/startup2024"> Kendra's Github</a></span>
      </div>
    </footer>
  </div>
  );
}