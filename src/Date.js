import React,{Component} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';




class Disponibilites extends Component {
    constructor(props){
        super(props)
        this.state = {
            value : Date.now()
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleValue = this.handleValue.bind(this)
    }
    handleSubmit(){
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        let urlencoded = new URLSearchParams()
        urlencoded.append("dispo",this.state.value)
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
          }
        fetch("http://localhost:4567/api/dispo", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
        
    }
    handleValue(event){
        this.setState({value: event.target.value})
    }
    render(){
        return (
            <div class="Disponibilites">
                <img class="logo" src="../logo.png" />
                <h2>Quelles sont vos disponibilités ?</h2>
                <form onSubmit= {this.handleSubmit} className='calendar' noValidate>
                    <TextField
                        id="datetime-local"
                        label="Disponiblités"
                        type="datetime-local"
                        defaultValue="2020-01-01T10:30"
                        className='calendar'
                        value = {this.state.value}
                        onChange = {this.handleValue}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    <input type="submit" id="submitDetails" name="submitDetails" value = "VALIDER" class="button"/>
                </form>
            </div>        
            )
    }
            
}

export default Disponibilites