import React,{Component} from "react";
import { BrowserRouter as Router,
  Switch,
  Route,
  Link
  } from "react-router-dom"

class password extends Component {
   constructor(props){
     super(props)
     this.state = {
      email :''
     }
     this.handleEmail = this.handleEmail.bind(this)

     this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleEmail(event){
     this.setState({email: event.target.value})
   }

   handleSubmit(){
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    let urlencoded = new URLSearchParams()
    urlencoded.append("email",this.state.email)
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    }
    fetch("http://localhost:4567/api/forgetMDP", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error))
    alert("L'email a été envoyé avec succès")
   }  
  
  render(){

    return (
      <div class = "password">
        <form   action='/Bienvenue' onSubmit={this.handleSubmit}>
          <h1>MOT DE PASSE OUBLIÉ ?</h1>
          <input value={this.state.email} onChange={this.handleEmail} class="box" type="email" name="email" id="email" placeholder="Adresse e-mail" required /> <br/>
          <p> Saissisez votre adresse mail pour réinitialiser votre mot de passe</p>
          <input type = "submit" class="button" value = "ENVOYER"/>
          <Link to="/Inscription">
                <p class="pasdecompte"> Vous n'êtes pas encore membre ? <a> Rejoingnez-nous' </a> </p>
          </Link>
        </form>
      </div>
      )
  }
}

export default password