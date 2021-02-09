import React from 'react'
import Header from './Header.js'

function Bienvenue() {
    return (
        <div class="Bienvenue">
            <Header/>
            <h1> Bienvenue parmi nous, User !</h1>
            <p> Afin d'optimiser votre expérience avec nous, nous avons besoin d'en savoir un peu plus sur vous</p>
            <a class="button"> COMMENCER </a>
        </div>
    )
}

export default Bienvenue