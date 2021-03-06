import React from 'react'

import logo from '../../assets/img/logomenor1.jpeg'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Button from 'react-bootstrap/Button'
import {IoLogoWhatsapp } from "react-icons/io";
import {FiMail } from "react-icons/fi";
import {FaUserCheck } from "react-icons/fa";


import {Link} from "react-router-dom"


function Navbarr(){
    return (
      <Navbar expand="lg">
      <Navbar.Brand href="#home" style={{ alignContent: 'center'}}><img className="logotipo" src={logo} alt="Logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="menuitem" to="/contato">Contato</Link>
          <Link className="menuitem" to="/sobre">Sobre</Link>
          <Link className="menuitem" to="/Home">Home</Link>
          {/* <NavDropdown className="menuitem" title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item >Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
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
    <Link className="menuitem" to="/login"> <FaUserCheck/> Area do Cliente</Link>
    
    </Navbar.Text>
  </Navbar.Collapse>
    </Navbar>
    )
} 
export default Navbarr;