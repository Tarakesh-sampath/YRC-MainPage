import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs.js';
import Home from './components/Home.js';

function App() {
  return (
    <div className="App">
       <Router>
          <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
