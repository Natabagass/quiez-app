import { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import CardSoal from './components/CardSoal'
import Login from './components/Login'
import PageSoal from './components/PageSoal'
import Welcome from './components/Welcome'
import Hasil from './components/Hasil'
import AuthRoute from './routes/AuthRouter'
import PrivateRoute from './routes/PrivateRouter'

function App() {
  return (
    <Routes>
      <Route element={<AuthRoute />}>
        <Route path='/' element={<Login />}></Route>
      </Route>
        
      <Route element={<PrivateRoute />}>
        <Route path='/dashboard' element={<Welcome />}></Route>
        <Route path='/dashboard/kuis/:id' element={<PageSoal />}></Route>
        <Route path='/dashboard/hasil' element={<Hasil />}></Route>
      </Route>

    </Routes>
  )
}

export default App
