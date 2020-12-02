import React from 'react'
import {Link} from 'react-router-dom'

export default class eventPage extends React.Component{
    render(){
        return(
            <div className="screen">
            <div className="pageBody">
            <div className="welcome">
                <Link to="/"><h1 className="ss">❄❄❄ Secret Santa ❄❄❄</h1></Link>
            </div>
            <div className="options">
                <h1>Hello World</h1>
            </div>
            </div>
            </div>
        )
    }
}