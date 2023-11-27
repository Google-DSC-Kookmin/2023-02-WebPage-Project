import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ActivityPage from './pages/ActivityPage'
import MemberPage from './pages/MemberPage'
import './App.css';

function App() {
  return (
    <Router>
      
          <div className="App">
            <header>
              <img 
                className ='logo'src='img/Logo_mini.png'/> 
              <nav>
                <ul>
                  <li><Link to="/activities" style={{ textDecoration: "none", color: '#747474'}}>Activities</Link></li>
                  <li><Link to="/members" style={{ textDecoration: "none" , color: '#747474'}}>Member</Link></li>
                  <li><Link to="/timeline" style={{ textDecoration: "none", color: '#747474' }}>TimeLine</Link></li>
                  <li><Link to="/contact" style={{ textDecoration: "none", color: '#747474' }}>Contact</Link></li>
                </ul>
              </nav>
            </header>

            <Routes>
              <Route path="/activities" element={<ActivityPage />} />
              <Route path="/members" element={<MemberPage />} />
            </Routes>
          </div>
          
    </Router>

  );
}

export default App;
