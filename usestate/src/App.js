import React from 'react';
import { useState } from 'react';
import Homework from './components/Homework';
import './App.css'
import Event from './components/Event';
import Map from './components/Map';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>UseState</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count - 1)}>Minus</button>
      <button onClick={() => setCount(count + 1)}>Plus</button>
      <div className='homework'>

      <Homework/>
      <Event/>
      </div>
      <Map/>
    </div>
  );
}

export default App;
