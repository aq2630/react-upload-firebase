import React from 'react'
import "./index.css"
import { LinkContainer } from 'react-router-bootstrap'
import firebase from '../../config/firebase'
import Logo from "../../Assets/logo.png"
import SearchIcon from '@material-ui/icons/Search';
import AndroidIcon from '@material-ui/icons/Android';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { Button,Nav,NavDropdown ,Navbar,Form ,FormControl,Col,Row,Container} from 'react-bootstrap';

export default function index() {

  const logout = () => {
    firebase.auth().signOut().then(() => {
      alert("You hve signed out")
    }).catch((error) => {
      console.log(error)
    });
  } 
    return (
        <div className="header">

    <Navbar bg="" variant="dark">
      
      
    <LinkContainer to='/'><Navbar.Brand><h3 className="text-white">Logo</h3></Navbar.Brand></LinkContainer>

    <Nav className="mr-auto ">
    <NavDropdown className="bg-color" title="3D Models" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown className="bg-color" title="Nav Items" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown className="bg-color" title="Nav Items 2" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <LinkContainer to="/login"><Nav.Link>Login</Nav.Link></LinkContainer>
      <LinkContainer to="/login" onClick={logout}><Nav.Link>Logout</Nav.Link></LinkContainer>
    </Nav>
  </Navbar>
            

        </div>

        
    )
}
