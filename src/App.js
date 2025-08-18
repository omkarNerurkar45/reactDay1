import { useState } from 'react';
import './App.css';
import About from './protoTYpes/About';
import Navbar from './protoTYpes/Navbar';
import TextForm from './protoTYpes/TextForm';


function App() {
  const [mode, setMode] = useState('light');

  const togglePlay = ()=>{
    if( mode === 'light' ) {
      setMode('dark');
    } else {
      setMode('light');
    }
  }

  return (
    <>
    <Navbar title="TextUtils" home="Home" mode={mode} togglePlay={togglePlay} />
    <div className="container">
      <TextForm />
      <About/>
    </div>
    </>
  );
}

export default App;
