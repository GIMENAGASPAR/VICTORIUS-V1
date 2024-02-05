import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes} from "react-router-dom"
import './App.css'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {

  return <div className='App'>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="*" element={<>NOT FOUND</>}/>
      <Route path="/dasboard" element={<Dashboard/>} />
    </Routes>
      <Login/>
      <Dashboard/>
    </BrowserRouter>
    
    </div>
}

export default App
