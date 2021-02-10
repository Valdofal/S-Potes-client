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
            <Link to="/Bienvenue"><img class="arrow" src="../arrow.png" /> </Link>
            <img class="logo" src="../logo.png" />            <h1> Aidez-nous à personnaliser l'expérience pour vous</h1>
            <Link to="/Sport" class="button"> FEMME </Link>
            <Link to="/Sport" class="button"> HOMME </Link>

        </div>
    )
}

export default Bienvenue