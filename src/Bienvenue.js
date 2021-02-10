import React from 'react'
import Header from './Header.js'
import { BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom"


function Bienvenue() {
    return (
        <div class="Bienvenue">
            <img class="logo" src="../logo.png" />
            <h1> Bienvenue parmi nous, User !</h1>
            <p> Afin d'optimiser votre expérience avec nous, nous avons besoin d'en savoir un peu plus sur vous</p>
            <Link to="/Gender" class="button"> COMMENCER </Link>
        </div>
    )
}

export default Bienvenue