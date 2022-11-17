// import React, { Component } from 'react'
// // import LoginForm from './components/loginform'
// // import Nav from './components/nav'
// import Hello from './components/Hello'
// import { BrowserRouter as Router,Switch,Route,redirect,} from "react-router-dom";
// //import logo from './logo.svg';
// // import './App.css';
// import Greet from './components/Greet'
// // import Greet1 from './components/Greet1'
// import Message from './components/Message'
// import Counter from './components/Counter'
// //import React from 'react'
// className App extends Component{
//   // const admin={ email:"maddy@mad.com",password:"mad@123"}
//   // const [user, setUser] = useState({name:"",email:""});
//   // const[error,setError]=useState("");
//   // const Login=details =>{
//   //   console.log(details);
//   // }
//   // const Logout=() =>{
//   //   console.log("Logout");
//   // }
//   render(){
//   return (
//     <div classNameName="App">
//        {/* {(user.email!="")?(
//         <div classNameName="welcome">
//           <h2>Welcome, <span>{user.name}</span></h2>
//           <button>Logout</button>
//         </div>
//        ):(
//         <LoginForm/>
//        )
//        } */}
//        {/* <LoginForm/> */}
//        {/* <Greet name='madhuri' othername='minni'>
//           <button>Action</button>
//        </Greet>
//        <Greet name='srina' othername='bunny'>
//           <p>sister</p>
//        </Greet> */}
//        {/* <Hello/> */}
//        {/* <Message/> */}
//        <Counter/>
//     </div>
//   );
// }
// }

// export default App;
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
  const handlemode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='black';
      setalert("Dark mode has been enabled","success");
      document.title="TextUtils - Dark Mode";
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white';
      setalert("Light mode has been enabled","success");
      document.title="TextUtils - Light Mode";
    }
  }
  return(
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} handlemode={handlemode}/>
    <Alert alert={alert}   />
    <div className="container my-3">
      <Routes>
        <Route path="About" element={<About />}/>
          
        <Route path="/" element={<TextForm setalert={setalert} heading="Enter the text analyze" mode={mode}/>}/>
        
      </Routes>
        {/* <TextForm setalert={setalert} heading="Enter the text analyze" mode={mode}/> */}
        {/* <About/> */}
    </div>
    {/* <About/> */}
    </Router>
    
    </>
    
  );
}
export default App;
