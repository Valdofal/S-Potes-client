import './App.css';
import React from 'react'
import Header from './Header.js';
import Register from './Register.js'
import Connecter from './Connecter.js'
import Bienvenue from './Bienvenue.js'
import { BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom"
import ForgetMDP from './ForgetMDP';




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
            <Route path="/Password">
              <ForgetMDP/>
            </Route>

        </Switch>
        </Router>


    </div>
  )
}



export default App;