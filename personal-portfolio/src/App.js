import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
    </div>
  );
}

export default App;
