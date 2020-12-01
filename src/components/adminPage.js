import React from 'react'
import {Link} from 'react-router-dom'

export default class adminPage extends React.Component{
    render(){
        return(
            <div className="screen">
            <div className="pageBody">
            <div className="welcome">
                <Link to="/"><h1 className="ss">❄❄❄ Secret Santa ❄❄❄</h1></Link>
            </div>
            <div className="options">
                <button>Create an Event</button>
               <h1>My Events</h1>
            </div>
            </div>
            </div>
        )
    }
}