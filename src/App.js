import './App.css';
import Navbar from './protoTYpes/Navbar';
import TextForm from './protoTYpes/TextForm';


function App() {
  return (
    <>
    <Navbar title="TextUtils" home="Home" />
    <div className="container">
      <TextForm headings="Enter your Text" />
    </div>
    </>
  );
}

export default App;
