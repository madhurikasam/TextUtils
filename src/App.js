import './App.css';
import Navbar from './components/Navbar' ;
 import TextForm from './components/TextForm' ;
import About from './components/About' ;
import React, { useState } from 'react'
import Alert from './components/Alert' ;
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App(){
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const setalert=(msg,type)=>{
      setAlert({
        message:msg,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },2000);
  }
  const handlemode=(cls)=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='black';
      setalert("Dark mode has been enabled","success");
      //document.title="TextUtils - Dark Mode";
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white';
      setalert("Light mode has been enabled","success");
      //document.title="TextUtils - Light Mode";
    }
  }
  return(
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} handlemode={handlemode}/>
    <Alert alert={alert}   />
    <div className="container my-3">
      <Routes>
        <Route path="About" element={<About mode={mode}/>}/>
          
        <Route path="/" element={<TextForm setalert={setalert} heading="TextUtils - Enter the text for Manipulation" mode={mode}/>}/>
        
      </Routes> 
        
    </div>
 
    </Router>
    
    </>
    
  );
}
export default App;
