import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './pages/login'
import Project from './pages/project'
import Task from './pages/task'
import Dashboard from './pages/dashboard'
import Calendat from './pages/calendar'
import Clients from './pages/clients'
import Settings from './pages/settings'
import Team from './pages/team'
function App() {
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/task" element={<Task/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/calendar" element={<Calendat/>}/>
          <Route path="/clients" element={<Clients/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/team" element={<Team/>}/>
        </Routes>
      </BrowserRouter>
  )
}
export default App
