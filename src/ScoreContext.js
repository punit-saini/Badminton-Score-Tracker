import React, { createContext, useState, useContext } from 'react';

const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
  const [scores, setScores] = useState({ player1: 0, player2: 0 });

  const updateScore = (player, value) => {
    setScores(prevScores => ({ ...prevScores, [player]: prevScores[player] + value }));
  };

  return (
    <ScoreContext.Provider value={{ scores, updateScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

export const useScoreContext = () => useContext(ScoreContext);