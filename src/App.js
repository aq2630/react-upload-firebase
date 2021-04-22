import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Screens/Home';
import UploadFile from './Screens/UploadFile';
import Login from './Screens/Login';
import Register from './Screens/Register';
import ProductScreen from './Screens/ProductScreen';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/upload" component={UploadFile} />
        <Route path="/login" component={Login} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/register" component={Register} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
