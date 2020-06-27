import React from 'react';
import Routes from './components/Routes'
import { useHistory } from "react-router-dom";


import './App.css';

function App() {
  let history = useHistory();
  return (
    <Routes/>
  )
}

export default App;
