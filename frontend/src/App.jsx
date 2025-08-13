import React from 'react'
import './App.css'
import { useState } from 'react'
import viteLogo from '/vite.svg'
import Hero from './components/ui/Hero'

function App() {
  return (
    <div className='min-h-screen bg-green-100'>
      <h1 className='text-4xl font-bold text-green-700'>Nutri Genie</h1>
      <Hero/>
    </div>
  )
}

export default App
