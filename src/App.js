import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  return (
    // BEM
    <div className="app">
      <h1>Let's do this!!</h1>
      {/* Header */}
      <Header />
      {/* Home */}
    </div>
  );
}

export default App;
