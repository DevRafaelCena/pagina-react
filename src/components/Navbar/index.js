import React from 'react'

import logo from '../../assets/img/logomenor1.jpeg'
import Login from '../Login/'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import {IoLogoWhatsapp } from "react-icons/io";
import {FiMail } from "react-icons/fi";
import {FaUserCheck } from "react-icons/fa";




function Navbarr(){
    return (
      <Navbar  expand="lg">
      <Navbar.Brand href="#home" style={{ alignContent: 'center'}}><img class="logotipo" src={logo} alt="Logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="menuitem" href="#home">Serviços</Nav.Link>
          <Nav.Link className="menuitem" href="#link">Sobre</Nav.Link>
          <Nav.Link className="menuitem" href="#link">Contato</Nav.Link>
          <NavDropdown className="menuitem" title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-center">
    <Navbar.Text>
    <Button variant="primary"><p><IoLogoWhatsapp/> (11)93022-1925</p>
    <p><FiMail/> cenatec@outlook.com</p></Button>

    </Navbar.Text>
  </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      <a href="#login"> <FaUserCheck/> Area do Cliente</a>
    </Navbar.Text>
  </Navbar.Collapse>
    </Navbar>
    )
} 
export default Navbarr;