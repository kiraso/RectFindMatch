
import React from 'react'
import './App.css';
import SwipeButtons from './SwipeButtons'
import Header from './Header'
import TinderCards from './TinderCards'

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header/>
      <TinderCards/>
      {/* Card */}
      <SwipeButtons/>
      {/* swipe button */}
    </div>
  );
}

export default App;
