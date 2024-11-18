import React from 'react';

export function Login() {
  return (
    <main className ="container-fluid bg-purple text-center">
    <div>
    <h1>Login to play</h1>
    <form method="get" action="play.html">
      <div className="input-group mb-3">
        <span className="input-group-text">Username</span>
        <input className="form-control" type="text" placeholder="username" />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Password</span>
        <input className="form-control" type="text" placeholder="password" />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
      <button type="submit" className="btn btn-primary">Create</button>
    </form>
    </div>
  </main>
  );
}