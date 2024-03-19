import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from "./pages/Login/LoginPage"
import ModulesContainer from './pages/ModulesContainer/ModulesContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PreviewDrawerContent from './components/Dashboard/PreviewDrawerContent'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" Component={LoginPage}/>
          <Route path="projectname/*" Component={ModulesContainer}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
