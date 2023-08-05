import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const PlayerControl = ({ label, score, updateScore }) => (
  <div className='mb-6'>
    <p>{label}</p>
    <div className='flex gap-4'>
      <button
        className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded-full focus:outline-none"
        onClick={() => updateScore(-1)}
      >
        <FaMinus className='shadow-2xl shadow-slate-100' />
      </button>
      <p className="text-xl mx-4">{score}</p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full focus:outline-none"
        onClick={() => updateScore(1)}
      >
        <FaPlus />
      </button>
    </div>
  </div>
);

const Controls = ({ player1Score, player2Score, updatePlay1Score, updatePlay2Score }) => (
  <div className='flex justify-around flex-wrap mx-auto mb-8 font-serif italic text-[#ffffff] w-11/12 md:h-2/3 lg:w-1/3'>
    <PlayerControl label="Player 1" score={player1Score} updateScore={updatePlay1Score} />
    <PlayerControl label="Player 2" score={player2Score} updateScore={updatePlay2Score} />
  </div>
);

export default Controls;
