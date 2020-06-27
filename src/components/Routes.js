import React from 'react'
import { createBrowserHistory } from "history"

//importação dos componentes para routas
import {Switch,Route,BrowserRouter} from 'react-router-dom'
//import history from "../history";

//rotas
import Home from "../pages/home"
import Contato from "../pages/contato"
import Sobre from "../pages/sobre"
import Login from "../pages/adm/login"

import Adm from "../pages/adm"

import Erro from "../pages/404"

const history = createBrowserHistory({
    basename: "/"
  })
  //window.redirect = history.push

export default function Routes(){
    return(
       <BrowserRouter history={history}>
            <Switch>
                <Route path="/" exact component={Home} /> 
                <Route path="/home" exact component={Home} /> 
                <Route path="/contato" exact component={Contato} /> 
                <Route path="/sobre" exact component={Sobre} /> 

                <Route path="/login" exact component={Login} /> 

                <Route path="/adm" exact component={Adm} /> 

                <Route component={Erro} />

            </Switch>
        
        </BrowserRouter>

    )

}