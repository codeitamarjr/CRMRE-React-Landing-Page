import React, { useEffect } from 'react';
import LandingPage from './LandingPage';
import { clarity } from 'react-microsoft-clarity';

function App() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'test') {
      clarity.init('mbc689vhqb');
    }
  }, []);

  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
