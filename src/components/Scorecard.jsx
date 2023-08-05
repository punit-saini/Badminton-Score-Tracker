import React, { useEffect } from 'react';

const Scorecard = ({ player1Score, player2Score, round, round1Result, round2Result, round3Result, winner }) => {

    useEffect(()=>{
          console.log('from scorecard', round1Result)
    }, [round1Result])
  return (
    <div className='w-11/12 md:h-2/3 lg:w-1/3 mx-auto'>
      <div className='box pb-8 bg-[#1c2427] rounded-3xl'>
        <div className='box-heading rounded-3xl'>
          <div className='ellipse relative w-11/12 mx-auto blur-sm  h-[4px] bottom-1 '>ellipse</div>
          <div className='ellipse relative w-2/3 blur-3xl h-4 top-4 left-8'>ellipse</div>
          <h1 className=' text-white font-serif text-2xl pb-4'>Score Tracker</h1>
          <div className='ellipse relative w-11/12 mx-auto blur-sm  h-[1px] top-1 '>ellipse</div>
        </div>
        <div className='box-body w-4/5 mt-6 mx-auto tracking-wider text-left'>
          <div className='player-1 my-3 text-[#ffffff70]'>
            <p className='text-xl pb-3 font-semibold'>Player : <span className='text-white'>1</span></p>
            <div className='filler-container'>
              <div style={{ width: `${(player1Score / 21) * 100}%` }} className={`filler bg-gradient-to-r  from-orange-400 to-orange-500`}></div>
            </div>
          </div>
          <div className='ellipse relative w-full mx-auto blur-[90px] h-4 bottom-12 '>ellipse</div>
          <div className='player-2 my-3 text-[#ffffff70]'>
            <p className='text-xl pb-3 font-semibold'>Player : <span className='text-white'>2</span></p>
            <div className='filler-container'>
              <div style={{ width: `${(player2Score / 21) * 100}%` }} className='filler  bg-gradient-to-r from-teal-400 to-teal-500'></div>
            </div>
          </div>
          <div className='ellipse relative w-full mx-auto blur-[90px] h-6 bottom-14 '>ellipse</div>
          <div className='level my-2 text-center text-[#ffffff70]'>
            <p className='text-xl pb-3 font-semibold'> Current Round : <span className='text-white'>{round}</span></p>
            <div className='flex justify-center gap-5'>
              <img width={36} height={36} src={round1Result ? `${round1Result}.png` : 'star.png'} alt='Round 1' />
              <img width={36} height={36} src={round2Result ? `${round2Result}.png` : 'star.png'} alt='Round 2' />
              <img width={36} height={36} src={round3Result ? `${round3Result}.png` : 'star.png'} alt='Round 3' />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Scorecard;
