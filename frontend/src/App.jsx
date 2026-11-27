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
import Register from './pages/register'
import Admin from './pages/Admin/adminlayout'
import AdminDashboard from './pages/Admin/dashboard'
import AdminSetting from './pages/Admin/settings'
import UserDetails from './pages/Admin/userdetails'
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
          <Route path="/register" element={<Register/>}/>
          <Route path="/admin" element={<Admin/>}>
              <Route path="dashboard" element={<AdminDashboard/>}/>
              <Route path="settings" element={<AdminSetting/>}/>
              <Route path="userdetails" element={<UserDetails/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}
export default App
