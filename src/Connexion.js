import React,{Component} from "react";
import { BrowserRouter as Router,
  Switch,
  Route,
  Link
  } from "react-router-dom"

class Connexion extends Component {
   constructor(props){
     super(props)
     this.state = {
      email :'',
      password:''
     }
     this.handleEmail = this.handleEmail.bind(this)
     this.handlePassword = this.handlePassword.bind(this)

     this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleEmail(event){
     this.setState({email: event.target.value})
   }
   handlePassword(event){
     this.setState({password: event.target.value})
   }

   
   handleSubmit(){
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    let urlencoded = new URLSearchParams()
    urlencoded.append("email",this.state.email)
    urlencoded.append("password",this.state.password)
    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    }
    fetch("http://localhost:4567/api/connecter", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error))
   }  
  
  render(){

    return (
      <div class = "connexion">
        <form   action='/Bienvenue' onSubmit={this.handleSubmit}>
          <input value={this.state.email} onChange={this.handleEmail} class="box" type="email" name="email" id="email" placeholder="Adresse e-mail" required /> <br/>
          <input value={this.state.password} onChange={this.handlePassword} class="box" type="password" name="password" id="password" placeholder="Mot de passe" required /> <br/>
          <Link to="/Password">
                <a class="pasdecompte"> Mot de passe oublié ?  </a>
          </Link>
          
          <p> En vous connectant, vous acceptez de vous conformer à la <a> Politique de confidentialité </a>et aux <a>Conditions Générales</a></p>
          <input type="submit" id="submitDetails" name="submitDetails" value = "CONNEXION" class="button"/>
          
          <Link to="/Inscription">
                <p class="pasdecompte"> Vous n'êtes pas encore membre ? <a> Rejoingnez-nous' </a> </p>
          </Link>
        </form>
        
      </div>
      )
  }
}

export default Connexion