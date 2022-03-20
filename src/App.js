import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import About from './components/About';



function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <TextForm heading="Enter Text to analyze below" />
      {/* <About/> */}
    </>
  );
}

export default App;
