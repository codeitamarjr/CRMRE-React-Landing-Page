import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import ConfirmationPage from './ConfirmationPage'; // Import the new component
import { clarity } from 'react-microsoft-clarity';

function App() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'test') {
      clarity.init('mbc689vhqb');
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
