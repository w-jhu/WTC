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
import Register from './components/Register';
import Test from './components/pages/training-pages/Test';
import Summary from './components/pages/training-pages/Summary';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
