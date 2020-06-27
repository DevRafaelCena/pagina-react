import React, { useState}   from 'react'
import Header from '../../components/Header'
import Footer from "../../components/Footer/"
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import {RiMailSendLine } from "react-icons/ri";


//forms
import Form from 'react-bootstrap/Form'


export default function Contato(){
  //seta os estados dos inputs la nos inputs com o onchenge altera em real time o conteudo.
  const [nome,setNome] =useState("")
  const [email,setEmail] =useState("")
  const [telefone,setTelefone] =useState("")
  const [texto,setTexto] =useState("")

  

  async function enviaEmail(event){
    event.preventDefault();
  
    
    const info = JSON.stringify({nome,email,telefone,texto})
    const resposta = await fetch("http://localhost:5000/contato",{
     headers:{
       'Content-Type':"application/json",
     },
     method:"POST",
      body: info
    })
    console.log(resposta)

    if(resposta.status ===200){
      setNome("")
      setEmail("")
      setTelefone("")
      setTexto("")
      alert("Email enviado, Aguarde nosso retorno!")
    }else{
      alert("Ocorreu um erro, tente novamente")
    }
  
  } return(
        
        <div>
<Container >
          
          <Header/>
                   <main className="corpocontato"> 
    

                   <Form onSubmit={enviaEmail}>
                   <Form.Group required controlId="exampleForm.ControlInput1">
    <Form.Label>Nome</Form.Label>
    <Form.Control required type="text" name="nome" value={nome}
     onChange={(event)=>setNome(event.target.value)} placeholder="Nome completo" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email para Contato</Form.Label>
    <Form.Control required type="email"  name="email" value={email}
     onChange={(event)=>setEmail(event.target.value)} placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput2">
    <Form.Label>Telefone para Contato</Form.Label>
    <Form.Control type="fone" name="telefone"  value={telefone}
    onChange={(event)=>setTelefone(event.target.value)} placeholder="(11)99999-9999" />
  </Form.Group>
  
  
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Mensagem</Form.Label>
    <Form.Control name="texto" as="textarea" value={texto} 
     onChange={(event)=>setTexto(event.target.value)} rows="3" />
  </Form.Group>


  <Button type="submit"><RiMailSendLine/> Enviar</Button>
</Form>
               
                         </main>
                         <br/>
                         <Footer/>
                   </Container>

        </div>

    )

}