import React from 'react';
import './scoreboard.css';


export function Scoreboard() {
  return (
  <main className="container-fluid bg-purple text-light text-center">
    <h1>Global Scoreboard</h1>

    <table className="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Score</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Bob Esponja</td>
                <td>20</td>
            </tr>
            <tr>
                <td>Patricio Estrella</td>
                <td>13</td>
            </tr>
            <tr>
                <td>El gary</td>
                <td>15</td>
            </tr>
        </tbody>
      </table>
    </main>
  );
}