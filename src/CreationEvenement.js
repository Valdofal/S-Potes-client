import React,{Component} from "react"
import Header from './Header'
import { BrowserRouter as Router,
    Switch,
    Route,
    Link
    } from "react-router-dom"



class CreateEvent extends Component {
  constructor(props){
    super(props)
    this.state = {
     email :'',
     password:'',
     firstName:'',
     lastName:'',
     birthdate: ''
    }
    this.handleName = this.handleName.bind(this)
    this.handleAddress = this.handleAddress.bind(this)
    this.handleSport = this.handleSport.bind(this)
    this.handleDescription = this.handleDescription.bind(this)
    this.handleInformation = this.handleInformation.bind(this)
    
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleName(event){
    this.setState({name: event.target.value})
  }
  handleAddress(event){
    this.setState({address: event.target.value})
  }
  handleSport(event){
    this.setState({sport: event.target.value})
  }
  handleDescription(event){
    this.setState({handleDescription: event.target.value})
  }
  handleInformation(event){
    this.setState({information: event.target.value})
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
    <div class="createevent">
        <Link to="/MenuPrincipal"><img class="arrow" src="../arrow.png" /> </Link>
        <img class="logo" src="../logo.png" />
        <h1> Créer votre événement </h1>
        <form action="/selectDate" method="POST" onSubmit={this.handleSubmit}>
          <input value={this.state.name} onChange={this.handleName} class="box" type="text" name="name" id="name" placeholder="Nom de l'événement" required /> <br/>
          <input value={this.state.address} onChange={this.handleAddress} class="box" type="text" name="address" id="address" placeholder="Adresse de l'événement" required /> <br/>
          <input value={this.state.sport} onChange={this.handleSport} class="box" type="text" name="sport" id="sport" placeholder="Choisir un sport" required /><br/>
          <input value={this.state.description} onChange={this.handleDescription} class="box" type="text" name="lastName" id="lastName" placeholder="Description de l'événement" required /> <br/>
          <input value={this.state.information} onChange={this.handleInformation}class="box" type="text" name="information" id="information" placeholder="Informations supplémentaires" required /> <br/>
          <input type="submit" id="submitDetails" name="submitDetails" value = "SUIVANT" class="button"/>
        </form>
    </div>
    )
  }
}

export default CreateEvent;
