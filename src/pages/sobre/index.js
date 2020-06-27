import React, { useState }  from 'react'
import Header from '../../components/Header'
import Footer from "../../components/Footer/"
import Container from 'react-bootstrap/Container'

import construcao from '../../assets/img/unnamed.png'


//forms
import Form from 'react-bootstrap/Form'


export default function Sobre(){
    
    
    return(
        
        <div>
<Container flex>
          
          <Header/>
                   <main className="corposobre"> 
    

        
                   <img className="construcao" src={construcao} alt="Logo" />






                       
                         </main>
                         <br/>
                         <Footer/>
                   </Container>

        </div>

    )

}