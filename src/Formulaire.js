import React from 'react'
import { BrowserRouter as Router,
    Switch,
    Route,
    Link
    } from "react-router-dom"

function Formulaire() {
    return (
    <div class = "formulaire">
      <form action="localhost:3000/user" method="post">
        <input class="box" type="email" name="email" id="email" placeholder="Adresse e-mail" required /> <br/>
        <input class="box" type="password" name="password" id="password" placeholder="Mot de passe" required /> <br/>
        <input class="box" type="text" name="firstName" id="firstName" placeholder="Prénom" required /><br/>
        <input class="box" type="text" name="lastName" id="lastName" placeholder="Nom" required /> <br/>
        <input class="box" type="date" name="birthdate" id="birthdate" placeholder="jj/mm/aaaa" required /> <br/>
        <p> En créant un compte, vous acceptez de vous conformer à la <a> Politique de confidentialité </a>et aux <a>Conditions Générales</a></p>
        <Link to="/Bienvenue"><input type="submit" id="submitDetails" name="submitDetails" value = "S'INSCRIRE" class="button"/> </Link>
      </form>
      <p class="dejamembre"> Déjà membre ? <a> Se connecter </a> </p>
    </div>
    )
  }

export default Formulaire