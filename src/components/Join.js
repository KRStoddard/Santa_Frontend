import React from 'react'
import {Link} from 'react-router-dom'

export default class Join extends React.Component{
    render(){
        return(
            <div className="screen">
            <div className="pageBody">
            <div className="welcome">
                <Link to="/"><h1 className="ss">❄❄❄ Secret Santa ❄❄❄</h1></Link>
            </div>
            <div className="options">
                <form>
                <h2>Please Enter Event Code</h2>
                <input type="text" /><br></br>
                <button>Join</button>
                </form>
            </div>
            </div>
            </div>
        )
    }
}