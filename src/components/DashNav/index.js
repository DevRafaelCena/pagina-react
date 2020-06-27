import React from 'react'

import logo from '../../assets/img/logomenor1.jpeg'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Button from 'react-bootstrap/Button'
import {IoLogoWhatsapp } from "react-icons/io";
import {FiMail } from "react-icons/fi";
import {GiExitDoor } from "react-icons/gi";
import {FiAlertTriangle} from "react-icons/fi"


import {Link} from "react-router-dom"


function DashNav(){
    return (
      <Navbar expand="lg">
      <Navbar.Brand href="#home" style={{ alignContent: 'center'}}><img className="logotipo" src={logo} alt="Logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
         {/*  <Link className="menuitem" to="/contato"></Link>
          <Link className="menuitem" to="/sobre">Sobre</Link>
          <Link className="menuitem" to="/Home">Home</Link> */}
          {/* <NavDropdown className="menuitem" title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item >Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
    <h2><FiAlertTriangle/></h2>
    
    </Navbar.Text>
  </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
    <h2>Usuario: Fulano</h2>
    
    </Navbar.Text>
  </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
    <Link className="menuitem" to="/logout"> <GiExitDoor/>Sair</Link>
    
    </Navbar.Text>
  </Navbar.Collapse>
    </Navbar>
    )
} 
export default DashNav;