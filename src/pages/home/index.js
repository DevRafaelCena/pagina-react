import React from 'react'
import Header from '../../components/Header'
import Carousel from '../../components/Carousel/'
import Card from "../../components/Card/"
import Footer from "../../components/Footer/"
import Container from 'react-bootstrap/Container'

export default function Home(){
    return (
    
        <Container flex>
          
  <Header/>
           <main>   
  <Carousel/>
  
  
  <Card/>
  </main>
  
  <Footer/>
  </Container>
  
  
  
  
   
    
     
    );
  }
  
