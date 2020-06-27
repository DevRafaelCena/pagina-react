import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import manutencao from '../../assets/img/manutencao_informatica.jpg'
import server from '../../assets/img/server.jpg'
import consultoria from '../../assets/img/consultoria.jpg'
import coder from '../../assets/img/coder.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function CardServico(){
    return(
        <Container flex >
            <Row   xs={3} md={6} lg={12}>
            <Col className ="cartoes" xs={12} md={6} lg={3}>
<Card   style={{ width: '18rem' }}>
  <Card.Img style={{ height: '200px',}} variant="top" src={manutencao} />
  <Card.Body className="bodyCartoes">
    <Card.Title>Manutenção</Card.Title>
    <Card.Text className="cardTexto">
      <p>
      Especialização em manutenção, residencial e empresarial.</p>
    </Card.Text>
   
  </Card.Body>
  <Button variant="primary">Saiba mais</Button>
</Card>
</Col>
<Col className="cartoes" xs={12} md={6} lg={3}>

<Card style={{ width: '18rem' }}>
  <Card.Img style={{ height: '200px', }} variant="top" src={server} />
  <Card.Body>
    <Card.Title>Servidores</Card.Title>
    <Card.Text className="cardTexto">
      <p>
      Configuração e Administração de Servidores</p>
    </Card.Text>
    
  </Card.Body>
  <Button variant="primary">Saiba mais</Button>
</Card>
</Col>

<Col className ="cartoes" xs={12} md={6} lg={3}>
<Card  style={{ width: '18rem'}}>
  <Card.Img style={{ height: '200px', }} variant="top" src={coder} />
  <Card.Body>
    <Card.Title>Desenvolvimento</Card.Title>
    <Card.Text className="cardTexto">
      <p>Desenvolvimento e integração de sistemas</p>
    </Card.Text>
   
  </Card.Body>
  <Button variant="primary">Saiba mais</Button>
</Card>
</Col>
</Row> 

        </Container>

    )

}

export default CardServico;