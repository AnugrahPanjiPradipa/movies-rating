import React from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';

const App = () => {
  return (
    <div className="flex flex-col h-screen bg-black overflow-hidden">
      <Navbar />
      <div className="flex-grow min-h-0">
        <Body />
      </div>
    </div>
  );
};

export default App;
