import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './components/pages/AboutUs/AboutUs.js';
import Home from './components/pages/Home/Home.js';
import Serv1 from "./components/pages/OurServices/Serv1.js";

function App() {
  return (
    <div className="App">
       <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/AboutUs" element={<AboutUs/>} />
            <Route path="/service" element={<AboutUs/>} />
            <Route path="/service-Serv1" element={<Serv1/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
