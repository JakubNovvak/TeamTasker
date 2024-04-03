import { Typography } from '@mui/material';
import './App.css'
import LoginPage from "./pages/Login/LoginPage"
import ModulesContainer from './pages/ModulesContainer/ModulesContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './pages/Admin/Admin';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ManageTeams from './components/Admin/ManageTeams';

function temp()
{
  return(
    <>
      <Typography fontWeight={550} fontSize={70}>
        404 - Page not found
      </Typography>
    </>
  );
}

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" Component={LoginPage}/>
          <Route path="projectname/*" Component={ModulesContainer}/>
          <Route path="/" Component={temp}/>
          <Route path="/admindashboard" Component={Admin}/>
          <Route path="/projectspage" Component={ProjectsPage}/>
          <Route path="/admindashboard/manageteams" Component={ManageTeams}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
