import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ActivityPage from './pages/ActivityPage'
import MemberPage from './pages/MemberPage'
import './App.css';
import AppNavBar from "./components/AppNavBar";
import MainPage from "./pages/MainPage";
import ContactPage from "./pages/ContactPage";
import TimelinePage from './pages/TimelinePage';

function App() {
    return (
        <Router>
          <div className="App">
                <AppNavBar/>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/activities" element={<ActivityPage />} />
                    <Route path="/members" element={<MemberPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/timeline" element={<TimelinePage />} />
                </Routes>
          </div>
        </Router>
    );
}

export default App;
