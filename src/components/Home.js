import React from 'react'
import {Link} from 'react-router-dom'

export default class Home extends React.Component{
    render(){
        return(
            <div className="screen">
            <div className="pageBody">
            <div className="welcome">
                <h2>Welcome to</h2>
                <h1 className="ss">❄❄❄ Secret Santa ❄❄❄</h1>
            </div>
            <div className="options">
                <h2>Would you like to...</h2>
                <Link to="/join"><button>Join an Event</button></Link>
                <h2>or</h2>
                <Link to="/login"><button>Login</button></Link> 
                <h2>To Start/Manage An Event</h2>
            </div>
            </div>
            </div>
        )
    }
}