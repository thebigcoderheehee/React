import React, { useState } from 'react';
import { Route, Routes, Link } from "react-router-dom";
import Homework from './components/Homework';
import './App.css';
import Event from './components/Event';
import Map from './components/Map';
import Color from './components/Color';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/map">Flipkart App</Link> | <Link to="/event">Event</Link> | <Link to="/homework">Homework</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Welcome Home</h1>} />
        <Route path="/map" element={<Map />} />
        <Route path="/event" element={<Event />} />
        <Route path="/homework" element={<Homework />} />
      </Routes>

      <h1>UseState</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count - 1)}>Minus</button>
      <button onClick={() => setCount(count + 1)}>Plus</button>

      <Color />
    </div>
  );
}

export default App;
