import './App.css';
import React from 'react'
import Title from './Title.js';


function App() {
  return (
    <div>
    <Formulaire/>
    </div>)
}

function Header(){}

function Formulaire() {
  return (
    <form action="localhost:3000/user" method="post">
      <h1> Signup form</h1>
      <input class="box" type="text" name="firstName" id="firstName" placeholder="Entrez votre prénom" required /><br/>
      <input class="box" type="text" name="lastName" id="lastName" placeholder="Entrez votre nom" required /> <br/>
      <input class="box" type="email" name="email" id="email" placeholder="Entrez votre e-mail" required /> <br/>
      <input class="box" type="date" name="birthdate" id="birthdate" placeholder="Entrez votre date de naissance" required /> <br/>
      <input class="box" type="password" name="password" id="password" placeholder="Entrez votre mot de passe" required /> <br/>
      <input type="submit" id="submitDetails" name="submitDetails" value = "Envoyer "/>
    </form>
  )
}
export default App;