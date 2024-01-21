import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/pages/Home';
import Menu from './components/Menu';
import Train from './components/pages/training-pages/Train';
import Compete from './components/pages/compete-pages/Compete';
import Learn from './components/pages/learn-pages/Learn';
import Leaderboard from './components/pages/leaderboard-pages/Leaderboard';
import Login from './components/pages/auth-pages/Login';
import Register from './components/pages/auth-pages/Register';
import Test from './components/pages/training-pages/Test';
import Summary from './components/pages/training-pages/Summary';
import Profile from './components/pages/auth-pages/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/train" element={<Train/>} />
          <Route path="/compete" element={<Compete/>} />
          <Route path="/learn" element={<Learn/>} />
          <Route path="/leaderboard" element={<Leaderboard/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/test" element={<Test/>} />
          <Route path="/summary" element={<Summary/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
