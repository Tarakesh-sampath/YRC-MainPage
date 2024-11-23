import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import AboutUs from './components/AboutUs.js';
import Home from './components/Home.js';
=======
import AboutUs from './components/pages/AboutUs.js';
import Home from './components/pages/Home.js';
>>>>>>> e0ed2a3abcc5c1d6a5f991d34176aa472b841f73

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
