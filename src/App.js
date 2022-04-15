import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';




function App() {
  const [mode, setMode] = useState('');

  const toggleMode = () => {
    (mode === '')?setMode('dark'):setMode('')
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <TextForm heading="Enter Text to analyze below" mode={mode} toggleMode={toggleMode}/>
    </>
  );
}

export default App;
