import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const games = [
    { id: 1, title: 'Word Scramble', path: '/word-scramble', description: 'Unscramble letters to form words' },
    { id: 2, title: 'Hangman', path: '/hangman', description: 'Guess the word before you run out of attempts' },
    // More games will be added here as they're developed
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">English Word Games</h1>
      <p className="dashboard-subtitle">Select a game to play and improve your English vocabulary</p>
      
      <div className="games-grid">
        {games.map((game) => (
          <Link to={game.path} key={game.id} className="game-card">
            <h2>{game.title}</h2>
            <p>{game.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;