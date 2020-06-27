import React, { useState}   from 'react'
import Header from '../../../components/Header'
import Footer from "../../../components/Footer/"
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import {RiMailSendLine } from "react-icons/ri";
//import construcao from '../../../assets/img/unnamed.png'

import { useHistory } from 'react-router-dom';

//forms
import Form from 'react-bootstrap/Form'
import axios from 'axios'



export default function Login(){
 // let localstorage =''

  const [senha,setSenha] =useState("")
  const [email,setEmail] =useState("")
 
  const history = useHistory();
  async function logando(event){
    event.preventDefault();

   
   const info = JSON.stringify({email,senha})
   console.log("informações: " + info)

let teste =''
   const resposta = await axios.post(`http://localhost:5000/login`, { email,senha })
.then(res => {
   teste = res
  for (var property in teste.data){
    console.log(property + " = " + teste.data[property]);
  }
  //console.log("res . data " + resposta);
}) .catch(error => {
  alert("Email ou login invalidos")
});



  if(teste.status === 200){
    setSenha("")
    setEmail("")
    localStorage.setItem('email',teste.data.email)
    const email = localStorage.getItem('email',teste.data.email)
    alert("logado " + teste.data.email , email)
    

   
        history.push("/adm");
    
    }
  

}

    return(
        
        <div className="teste">
<Container flex className="teste">
          
          <Header/>
          <main className="corpocontato"> 
    
                   <Form className="formLogin"  onSubmit={logando}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Entre com seu email</Form.Label>
    <Form.Control type="email" name="email" value={email}
     onChange={(event)=>setEmail(event.target.value)} placeholder="exemplo@email.com.br" />
    <Form.Text className="text-muted">     
    Nunca compartilharemos seu email com mais ninguém
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Senha</Form.Label>
    <Form.Control type="password" name="senha" value={senha}
     onChange={(event)=>setSenha(event.target.value)} placeholder="senha" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Lembrar senha" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Entrar
  </Button>
</Form>






                       
                         </main>
                         <br/>
                         <Footer/>
                   </Container>

        </div>

    )

}