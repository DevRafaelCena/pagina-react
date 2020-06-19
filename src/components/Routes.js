import React from 'react'

//importação dos componentes para routas
import {Switch,Route,BrowserRouter} from 'react-router-dom'

//rotas
import Home from "../pages/home"
import Contato from "../pages/contato"

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} /> 
                <Route path="/home" exact component={Home} /> 
                <Route path="/contato" exact component={Contato} /> 
            </Switch>
        
        </BrowserRouter>

    )

}