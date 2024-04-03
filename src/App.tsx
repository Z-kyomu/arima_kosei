import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lol from './Pages/Games/Lol';
import Games from './Pages/Games';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/Games' element={<Games />} />
        <Route path='/Lol' element={<Lol />} />
      </Routes>
    </Router>
  );
}

export default App;
