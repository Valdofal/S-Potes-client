import './App.css';
import React from 'react'
import Header from './Header.js';
import Register from './Register.js'
import Connecter from './Connecter.js'
import Bienvenue from './Bienvenue.js'
import CreationEvenement from './CreationEvenement.js'
import Sport from './Sport'
import Gender from './Gender.js'
import Map from './Map'
import Profil from './Profil'
import ForgetMDP from './ForgetMDP';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


function App() {
  return (
    <div class="App">
        <Router>
        <Switch>
            <Route exact path="/">
            <img class="logo" src="../logo.png" />
            <Link to="/Inscription">
                <a class="button"> S'INSCRIRE </a>
            </Link>
            <Link to="/Connexion">
                <a class="button"> CONNEXION </a>
            </Link>
            </Route>
            <Route path="/Inscription"> 
                <Register />
            </Route>
            <Route path="/Connexion">
                <Connecter />
            </Route>
            <Route path="/Bienvenue">
              <Bienvenue/>
            </Route>
            <Route path="/createEvent">
                <CreationEvenement />
            </Route>
            <Route path="/selectDate">
              <selectDate />
            </Route>
            <Route path="/Gender">
              <Gender/>
            </Route>
            <Route path="/Sport">
              <Sport />
            </Route>
            <Route path="/Password">
              <ForgetMDP/>
            </Route>
            <Route path ='/Map'>
              <Map/>
            </Route>
            <Route path="/Profil">
              <Profil/>
            </Route>

        </Switch>
        </Router>


    </div>
  )
}



export default App;