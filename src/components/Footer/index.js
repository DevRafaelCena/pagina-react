import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {AiFillFacebook } from "react-icons/ai";
import {AiFillGithub } from "react-icons/ai";


function Footer(){
    return(
        <div class="footer">
            <Container fluid >
            <Row  xs={12} md={12} lg={12}>
            <footer  >
            <Col  md={{ span: 12, offset:1 }} >
     
  <p >@Cena Tecnologia - 2020 | Todos os direitos reservados  |
        <a target="_blank" href="https://www.facebook.com/Cenatecnologia"><button><AiFillFacebook class="face"/></button></a>
        <a target="_blank" href="https://github.com/DevRafaelCena"><button><AiFillGithub class="git"/></button></a>
  
        </p>
  
 
</Col>




</footer>
</Row>

</Container>

        </div>
    );
}

export default Footer;