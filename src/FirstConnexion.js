import React from 'react'
import { BrowerRoute as Router,
    Switch,
    Route,
    Link
    } from "react-dom"

function FirstConnexion() {
    return (
        <div>
            <img class="logo" src="../logo.png" />
            <a class="button"> S'INSCRIRE </a>
            <a class="button"> CONNEXION </a>
        </div>
    )
}

export default FirstConnexion