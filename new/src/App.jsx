import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Statebasics from './components/Statebasics'
import Counter from './components/Counter'
import Display from './components/Display'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    
    
  

    <Routes>
      <Route path='/sta' element={<Statebasics/>}></Route>
      <Route path='/cta' element={<Counter/>}></Route>
      <Route path='/dta' element={<Display/>}></Route>
    </Routes>

    </>
  )
}

export default App
