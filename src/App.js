import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from  "./Components/Header"
import Home from  "./Screens/Home"
import UploadFile from  "./Screens/UploadFile"
import Login from  "./Screens/Login"
import Footer from "./Components/Footer"
import UserForm from "./Components/userForm"


function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path='/upload' component={UploadFile}/>
        <Route path='/login' component={Login}/>
        <Route path='/' component={Home}/>
      {/* <Route path='/form' component={UserForm}/> */}
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
