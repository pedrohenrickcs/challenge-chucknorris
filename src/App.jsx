import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Joke from './pages/Joke';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/joke/:category" element={<Joke />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;