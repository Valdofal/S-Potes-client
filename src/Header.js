import React from 'react'
import { BrowserRouter as Router,
    Switch,
    Route,
    Link
    } from "react-router-dom"


function Header() {
    return (
        <div class = "Header">
            <Link to="/"><img class="arrow" src="../arrow.png" /> </Link>
            <img class="logo" src="../logo.png" />
        </div>
    )
}

export default Header