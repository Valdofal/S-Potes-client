import React,{Component} from 'react'
import {
Link
} from "react-router-dom"


class Profil extends Component{
    constructor(props){
        super(props)
        this.state = {
            email : '',
            description : '',
            firstName : '',
            lastName : '',
            sports : ''
        }
    }



    fetchData(){
        let url = window.location.href
        let shortenedUrl = url.substring(url.lastIndexOf('/') +1)
        fetch('http://localhost:4567/profil/'+shortenedUrl).then(response => {
            response.json().then(value => {
            this.setState({
                firstName:value.firstName,
                lastName:value.lastName,
                description:value.Description,
                sports:value.sports
            })
            })
        })
    }
    componentDidMount(){
        this.fetchData()
    }
    render(){            
        return (
            <div class="Profil">
                <Link to="/Connexion"><img class="arrow" src="../arrow.png" /> </Link>
                <center><h1> Profil</h1></center>
                <img class="profil" src="../profil.png" />            
                <h3> Prénom : {this.state.firstName} </h3>        
                <h3> Nom : {this.state.lastName} </h3>
                {this.state.description}
                <center><h2> Sports Favoris</h2></center>
                {this.state.sports}
            </div>
        )
    }
}

export default Profil