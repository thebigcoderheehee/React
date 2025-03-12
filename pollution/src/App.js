import './App.css';
import Nav from './components/Nav';
import { Route, Routes, Link } from "react-router-dom";
import Air from './components/Air';
import Land from './components/Land';
import Water from './components/Water';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Nav />
        <Routes>
              <Route path="/Air" element={<Air/>} />
              <Route path="/Land" element={<Land/>} />
              <Route path="/Water" element={<Water/>} />
              <Route path="/" element={<Home/>} />
        </Routes>
    </div>
  );
}

export default App;
