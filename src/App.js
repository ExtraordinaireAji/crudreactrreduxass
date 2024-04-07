import React from 'react'
import Home from './assets/Home'
import Create from './assets/Create'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Update from './assets/Update'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/create' element={<Create/>} />
      <Route path='/edit/:id' element={<Update/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App