import React from 'react';
import './App.css';
import logo from './cc-logo.png'; 
import profileIcon from './profile-icon.jpg'; 
import inboxIcon from './inbox-icon.jpg';
import Dashboard from './Components/Dashboard';
import Calendar from './Components/Calendar';
import { TodoWrapper } from './Components/TodoWrapper';

function App() {
  return (
    
    <div className="App">

    {/* code below for the logo */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

    {/* code below for the icons */}
      <div className="icon-container">
        <img src={inboxIcon} alt="Inbox Icon" className="small-icon" />
        <img src={profileIcon} alt="Profile Icon" className="icon" />
      </div>

      <Dashboard /> 
      <Calendar /> 
      <TodoWrapper />
    </div>
  );
}

export default App;
