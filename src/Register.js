import React from 'react';
import './index.css';
import Formulaire from './Formulaire.js'
import { BrowserRouter as Router,
    Switch,
    Route,
    Link
    } from "react-router-dom"


function Register(){
    return (
    <div>
    <Link to="/"><img class="arrow" src="../arrow.png" /> </Link>
    <img class="logo" src="../logo.png" />    <Formulaire />
    </div>
    )
}

export default Register;

