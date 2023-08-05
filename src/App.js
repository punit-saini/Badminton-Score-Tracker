import './App.css';
import Scorecard from './components/Scorecard';
import Controls from './components/Controls';
import React, { useState, useEffect } from 'react';
import { runFireworks } from './utils';

function App() {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [round, setRound] = useState(1);
  const [round1Result, setRound1Result] = useState('');
  const [round2Result, setRound2Result] = useState('');
  const [round3Result, setRound3Result] = useState('');
  const [winner, setWinner] = useState('');

  const updatePlay1Score = (score) => {
    const audio = new Audio('score.mp3');
    audio.play();

    // Make sure scoer doesn't go below 0
    if(player1Score===0 && score<0){
    }
    else setPlayer1Score((prevScore) => prevScore + score);
        
  };

  const updatePlay2Score = (score) => {
    const audio = new Audio('score.mp3');
    audio.play();

    // Make sure scoer doesn't go below 0
    if(player2Score===0 && score<0){
    }
    else setPlayer2Score((prevScore) => prevScore + score);
  };

  // Ends a round 
  const endRound = () => {
    const audio = new Audio('round.mp3');
    audio.play();
    if (player1Score > player2Score) {
      if(round===1){
         setRound1Result('star1')
      }else if(round===2){
        setRound2Result('star1');
      }
      else setRound3Result('star1')
    } else  {
      if(round===1){
        setRound1Result('star2')
     }else if(round===2){
       setRound2Result('star2');
     }
     else setRound3Result('star2')
    } 

    setRound((round)=> round+1);


    setPlayer1Score(0);
    setPlayer2Score(0);
   
  };

  useEffect(() => {
    
    // Declare the winner if a single player won both first and second round
     if(round===3 && round1Result === round2Result){
       let winnerHolder
       if(round1Result.includes(1)){
          winnerHolder='Player 1'
       }
       else winnerHolder='Player 2'

       setWinner(winnerHolder)
        console.log('ending game')
       endGame()
    }
    
    // Decides who won the game after completion of third round 
    if( round===4){
      setRound(3)
      if(round3Result.includes(1)) setWinner('Player 1')
      else setWinner('Player 2')
      endGame()
    }
  }, [ round2Result, round3Result]);

  

  // Resets the values for new game
  const endGame = () => {
    const audio = new Audio('win.mp3');
    audio.play();
    runFireworks();
    setTimeout(()=>{
       setWinner('')
       setRound(1);
       setRound1Result('');
       setRound2Result('');
       setRound3Result('');
    }, 7000)
    setPlayer1Score(0);
    setPlayer2Score(0);
   
  };


  // To end the round when any player scores 21 points 
  if ((player1Score === 21 || player2Score === 21)) {
    endRound();
  }
  

  return (
    <div className="App py-24 ">

      
      {!winner ? <Controls
        player1Score={player1Score}
        updatePlay1Score={updatePlay1Score}
        player2Score={player2Score}
        updatePlay2Score={updatePlay2Score}
        
      /> : <div className='mb-8'>
      <p className=' w-3/5 md:w-1/2 lg:w-1/4 mx-auto z-50 top-24 text-xl text-white font-bold italic py-4 px-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500'>{winner} Won!</p>
    </div>}
      <Scorecard
        player1Score={player1Score}
        player2Score={player2Score}
        round={round}
        round1Result={round1Result}
        round2Result={round2Result}
        round3Result={round3Result}
      />
    </div>
  );
}

export default App;
