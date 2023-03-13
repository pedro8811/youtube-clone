import { useState } from 'react'
import './App.css'
import Topbar from './components/Topbar'
import CardGrid from './components/CardGrid'
import ThemeNavBar from './components/ThemeNavBar'
import LeftBar from './components/LeftBar'

function App() {

  return (
    <div className="App">
      <Topbar/>
      <ThemeNavBar/>
      <LeftBar/>
      <CardGrid/>
    </div>
  )
}

export default App
