import React, { useState } from 'react'
import Start from './Start'
import Game from './Game'

function App() {
  const [showInstructions, setShowInstructions] = useState(true)

  function startGame() {
    setShowInstructions(false)
  }

  return (
    <div className='game-container'>
      <h1>Peri Peri Game Master</h1>
      {showInstructions && <Start startGame={startGame} />}
      {!showInstructions && <Game />}
    </div>
  )
}

export default App
