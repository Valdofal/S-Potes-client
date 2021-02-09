import React from 'react'

function Formulaire() {
    return (
    <div class = "formulaire">
      <form action="localhost:3000/user" method="post">
        <input class="box" type="email" name="email" id="email" placeholder="Adresse e-mail" required /> <br/>
        <input class="box" type="password" name="password" id="password" placeholder="Mot de passe" required /> <br/>
        <input class="box" type="text" name="firstName" id="firstName" placeholder="Rrénom" required /><br/>
        <input class="box" type="text" name="lastName" id="lastName" placeholder="Nom" required /> <br/>
        <input class="box" type="date" name="birthdate" id="birthdate" placeholder="dd/mm/aaaa" required /> <br/>
        <input type="submit" id="submitDetails" name="submitDetails" value = "S'inscrire "/>
      </form>
    </div>
    )
  }

export default Formulaire