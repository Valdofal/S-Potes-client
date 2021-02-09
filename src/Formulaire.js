import axios from "axios"
import React,{Component} from "react"

class Formulaire extends Component {
   constructor(props){
     super(props)
     this.state = {
      email :'',
      password:'',
      firstName:'',
      lastName:'',
      birthdate: ''
     }
     this.handleEmail = this.handleEmail.bind(this)
     this.handlePassword = this.handlePassword.bind(this)
     this.handleFirstName = this.handleFirstName.bind(this)
     this.handleLastName = this.handleLastName.bind(this)
     this.handleBirthdate = this.handleBirthdate.bind(this)
     
     this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleEmail(event){
     this.setState({email: event.target.value})
   }
   handlePassword(event){
     this.setState({password: event.target.value})
   }
   handleFirstName(event){
     this.setState({firstName: event.target.value})
   }
   handleLastName(event){
     this.setState({lastName: event.target.value})
   }
   handleBirthdate(event){
     this.setState({birthdate: event.target.value})
   }
   handleSubmit(event){
     event.preventDefault()
     let data = "email="+this.state.email+"&password="+this.state.password+"&firstName="+this.state.firstName+"&lastName="+this.state.lastName+"&birthdate="+this.state.birthdate
     fetch('http://localhost:4567/api/register',{
       method: 'POST',
       body: JSON.stringify(data)
     }).then(response => console.log(response.body))
     event.preventDefault()
   }  
  
  render(){

    return (
      <div class = "formulaire">
        <form action="/api/register" method="POST" onSubmit={this.handleSubmit}>
          <input value={this.state.email} onChange={this.handleEmail} class="box" type="email" name="email" id="email" placeholder="Adresse e-mail" required /> <br/>
          <input value={this.state.password} onChange={this.handlePassword} class="box" type="password" name="password" id="password" placeholder="Mot de passe" required /> <br/>
          <input value={this.state.firstName} onChange={this.handleFirstName} class="box" type="text" name="firstName" id="firstName" placeholder="Prénom" required /><br/>
          <input value={this.state.lastName} onChange={this.handleLastName} class="box" type="text" name="lastName" id="lastName" placeholder="Nom" required /> <br/>
          <input value={this.state.birthdate} onChange={this.handleBirthdate}class="box" type="date" name="birthdate" id="birthdate" placeholder="jj/mm/aaaa" required /> <br/>
          <p> En créant un compte, vous acceptez de vous conformer à la <a> Politique de confidentialité </a>et aux <a>Conditions Générales</a></p>
          <input type="submit" id="submitDetails" name="submitDetails" value = "S'INSCRIRE" class="button"/>
        </form>
        <p class="dejamembre"> Déjà membre ? <a> Se connecter </a> </p>
      </div>
      )
  }
}

export default Formulaire