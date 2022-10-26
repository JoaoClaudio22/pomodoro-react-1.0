import React, { useEffect, useState } from 'react'


const POMODORO_TIME = 25 * 60 // --> 25 minutes

const Pomodoro_Timer = () => {
  
  const [secondsAmount, setSecondsAmount] = useState<number>(POMODORO_TIME)
  const [isPaused, setIsPaused] = useState<boolean>(true)
  
  let minutes = Math.floor(secondsAmount / 60) 
  let seconds = secondsAmount % 60 
  
  const timeLeft = `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`

  function handleClickButton():void{
    if(isPaused){
      setIsPaused(false)
      console.log('Start')
      
    }else{
      setIsPaused(true)
      console.log('Pause')
    }
  }

  function stopwatch():void{
    if(!isPaused){
      document.title = `${timeLeft} - Pomodoro`
      
      if(secondsAmount === 0){
        alert("Acabou o tempo")
        return
      }
  
      setTimeout(() => {
        setSecondsAmount(state => state - 1)
      }, 1000);

    }else{
      //Fazer algo quando estiver pausado
      console.log('Pausado')
    }
  }

  useEffect(() => {
    stopwatch()
  },[secondsAmount,isPaused])


  return (
    
    <div className='timer'>
      
      <div>
        <span>{timeLeft}</span>
      </div>

      <button onClick={handleClickButton}> {isPaused ? "Começar" : "Pausar"} </button>
      
    </div>
    
  )
}

export default Pomodoro_Timer