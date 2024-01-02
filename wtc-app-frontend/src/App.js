import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Menu from './components/Menu';
import Train from './components/pages/Train';
import Compete from './components/pages/Compete';
import Learn from './components/pages/Learn';
import Leaderboard from './components/pages/Leaderboard';
import Login from './components/Login';


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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
