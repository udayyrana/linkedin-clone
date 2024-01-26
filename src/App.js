import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Profile from './compnents/Profile/Profile'
import Home from './compnents/Home';
import Nav from './compnents/General/Nav';
import { useState } from 'react';

function App() {
  const login = useState(false);
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>
      </Routes>
    </>
  );
}

export default App;
