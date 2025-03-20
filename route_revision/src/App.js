
import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import First from './components/First';
import Second from './components/Second';

function App() {
  return (
    <div className="App">
      <h1>Click The Buttons</h1>
      <br/>
      <br/>
      <br/>
      <button>
        <Link to="/First">Click Me</Link>
      </button>
      <button>
        <Link to="/Second">Click Me</Link>
      </button>

      <Routes>
              <Route path="/First" element={<First/>} />
              <Route path="/Second" element={<Second/>} />
        </Routes>
    </div>
  );
}

export default App;
