import { useState } from 'react'
import './App.css'
import Topbar from './components/Topbar'
import CardGrid from './components/CardGrid'
import ThemeNavBar from './components/ThemeNavBar'
import LeftBar from './components/LeftBar'
import styled from 'styled-components'

const DoubleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  .div1 { grid-area: 1 / 1 / 2 / 11; }
  .div2 { grid-area: 2 / 1 / 6 / 2; }
  .div3 { grid-area: 2 / 2 / 6 / 11; }
`

function App() {

  return (
    <div className="App">
      <Topbar className='div1' />
      <DoubleGrid>
        <LeftBar className='div2'/>
        <div className='div3'>
          <ThemeNavBar />
          <CardGrid />
        </div>
      </DoubleGrid>
    </div>
  )
}

export default App
