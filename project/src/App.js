import './App.css';
import Navbar from './component/Navbar';
import Webimage from './component/Webimage';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <h1>React App</h1>
    <p className="text">Welcome to my first react project!</p>
    <Webimage/>
    <Navbar/>

    </div>
  );
}

export default App;
