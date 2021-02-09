import React,{Component} from "react"

class Connexion extends Component {
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

   
   handleSubmit(){
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    let urlencoded = new URLSearchParams()
    urlencoded.append("email",this.state.email)
    urlencoded.append("password",this.state.password)
    urlencoded.append("firstName",this.state.firstName)
    urlencoded.append("lastName",this.state.lastName)
    urlencoded.append("birthDate",this.state.birthdate)
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    }
    fetch("http://localhost:4567/api/register", requestOptions)
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

export default Connexion