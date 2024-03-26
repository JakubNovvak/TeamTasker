import './App.css'
import LoginPage from "./pages/Login/LoginPage"
import ModulesContainer from './pages/ModulesContainer/ModulesContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
