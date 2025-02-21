import { Metadata } from 'next'
import React from 'react'
import GameBoard from './components/GameBoard'

export const metadata: Metadata = {
  title: "Game Page"
}

const GamePage = () => {
  return (
    <div>
      <h1 className='text-center'>White turn</h1>
      <GameBoard />
    </div>
  )
}

export default GamePage