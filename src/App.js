import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
       <Router>
          <Routes>
            <Route path="/" element={<AboutUs />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
