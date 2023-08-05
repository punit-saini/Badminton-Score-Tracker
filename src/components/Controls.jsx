import React from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa';
// import { useScoreContext } from './ScoreContext';


const Controls = ({player1Score, player2Score, updatePlay1Score, updatePlay2Score}) => {

    // const { updateScore } = useScoreContext();

  return (
    <div className='flex justify-around flex-wrap mx-auto mb-8 font-serif italic text-[#ffffff] w-11/12 md:h-2/3 lg:w-1/3'>
       <div className='player-1 mb-6'>
           <p>Player 1</p>
           <div className='flex gap-4'>
           <button
          className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded-full focus:outline-none"
          onClick={() => updatePlay1Score(-1)}
        >
          <FaMinus className=' shadow-2xl shadow-slate-100' />
        </button>
        <p className="text-xl mx-4">{player1Score}</p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full outline-none focus:outline-none"
          onClick={() => updatePlay1Score(1)}
          
        >
          <FaPlus />
        </button>
           </div>
       </div>
       <div className='player-2'>
       <p>Player 2</p>
           <div className='flex gap-4'>
           <button
          className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded-full focus:outline-none"
          onClick={() => updatePlay2Score(-1)}
          
        >
          <FaMinus className=' shadow-2xl shadow-slate-100' />
        </button>
        <p className="text-xl mx-4">{player2Score}</p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full focus:outline-none"
          onClick={() => updatePlay2Score(1)}
          
        >
          <FaPlus />
        </button>
           </div>
       </div>
    </div>
  )
}

export default Controls