import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Error from './pages/Error.jsx';
import Housing from './pages/Housing.jsx';

function App() {
  return (
    <Router>
      <div className="main-container">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/housing/:id" element={<Housing />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

