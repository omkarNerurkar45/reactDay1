import { useState } from 'react';
import './App.css';
import Navbar from './protoTYpes/Navbar';
import TextForm from './protoTYpes/TextForm';


function App() {
  const [mode, setMode] = useState('light');

  const togglePlay = ()=>{
    if( mode === 'light' ) {
      setMode('dark');
      document.body.style.backgroundColor = '#282c31';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
    <Navbar title="TextUtils" home="Home" mode={mode} togglePlay={togglePlay} />
    <div className="container">
      <TextForm mode={mode}/>
     {/*<About/>*/} 
    </div>
    </>
  );
}

export default App;
