import React,{Component} from "react"
import Header from './Header.js'
import { BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom"


class Sport extends Component {
    constructor(props){
      super(props)
      this.state = {
       sport :''
       
      }
      this.handleSport = this.handleSport.bind(this)
      
      
      this.handleSubmit = this.handleSubmit.bind(this)
    }
 
    handleSport(event){
      this.setState({email: event.target.value})
    }
    
 
    
    handleSubmit(){
     let myHeaders = new Headers();
     myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
     let urlencoded = new URLSearchParams()
     urlencoded.append("sport",this.state.email)
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
    render() {

    return (
        <div class="Sport">
            <Link to="/Gender"><img class="arrow" src="../arrow.png" /> </Link>
            <img class="logo" src="../logo.png" />
            <h1> Par quels sports seriez-vous potentiellement intéressé ?</h1>
            <select  value={this.state.sport} onChange={this.handleSport}>
                <option value="Basket"> Basket </option>
                <option value="Football"> Football </option>
            </select>
            <input type="submit" id="submitDetails" name="submitDetails" value = "S'INSCRIRE" class="button"/>

        </div>
    )
}
}

export default Sport