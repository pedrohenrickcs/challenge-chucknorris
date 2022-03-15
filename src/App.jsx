import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Joke from './pages/Joke';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/joke/:category" element={<Joke />} />
        <Route path="*" element={<NotFound title="Not Found" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;