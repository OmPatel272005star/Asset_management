import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from './sidebar';
import Home from './Home';
import Asset from './Asset';
import Nav from './Nav';

function App() {
  return (
    <Router>
      <div className='container-fluid'>
        <div className='row'>
          <div className='content bg-white'>
            <Sidebar />
          </div>
          <div className='content'>
            <Nav />
            <div className='content'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/asset" element={<Asset />} />
                
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
