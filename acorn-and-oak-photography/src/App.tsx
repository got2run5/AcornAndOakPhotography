import React from 'react';
import './App.css';
import Header from './components/header/header';
import LeftNav from './components/left-nav/left-nav';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-area">
        <LeftNav />
        <div className="page-area">
          Page Area
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
