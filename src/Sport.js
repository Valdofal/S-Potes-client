import React,{Component} from "react"
import Select from 'react-select'
import { BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom"



class Sport extends Component {
    constructor(props){
      super(props)
      this.state = {
       sport :'',
       options :
       [
         {value:'football', label: 'Football'},
         { value: 'basketball', label: 'Basketball' }  ,
         { value: 'tennis', label: 'Tennis'}    
       ]
      }
      this.handleSport = this.handleSport.bind(this)
      
      
      this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSport(event){
      this.setState({sport: event.target.value})
    }
    
 
    
    handleSubmit(){
      console.log('submitted')
      //  let myHeaders = new Headers();
    //  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    //  let urlencoded = new URLSearchParams()
    //  urlencoded.append("sport",this.state.email)
    //  let requestOptions = {
    //    method: 'POST',
    //    headers: myHeaders,
    //    body: urlencoded,
    //    redirect: 'follow'
    //  }
    //  fetch("http://localhost:4567/api/sport", requestOptions)
    //  .then(response => response.text())
    //  .then(result => console.log(result))
    //  .catch(error => console.log('error', error))
    }  

    render() {

    return (
        <div class="Sport">
            <Link to="/Gender"><img class="arrow" src="../arrow.png" /> </Link>
            <img class="logo" src="../logo.png" />
            <h1> Par quels sports seriez-vous potentiellement intéressé ?</h1>
            <Select options={this.state.options} onChange={console.log(this.state.sport)} />
            <Link to='/Map'>
              <input type="submit" onSubmit={this.handleSubmit} id="submitDetails" name="submitDetails" value = "S'INSCRIRE" class="button"/>
          </Link>
        </div>
    )
}
}

export default Sport