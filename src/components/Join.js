import React from 'react'
import {Link} from 'react-router-dom'
import { API_ROOT, GET_REQ } from '../constants'

export default class Join extends React.Component{

    state = {
        error: ""
    }

    submitJoin = e => {
        e.preventDefault()

        fetch(`${API_ROOT}/events/${e.target.code.value}`, GET_REQ())
        .then(resp => resp.json())
        .then(data => {
            if (!data.error) {
                this.props.history.push(`/JoinPage/${data.code}`)
            } else {
                this.setState({error: 'Invalid Event Code'})
            }
        })
    }

    render(){
        return(
            <div className="screen">
            <div className="pageBody">
            <div className="welcome">
                <Link to="/"><h1 className="ss">❄❄❄ Secret Santa ❄❄❄</h1></Link>
            </div>
            <div className="options">
                <form onSubmit={this.submitJoin}>
                <h2>Please Enter 8-Digit Event Code</h2>
                {this.state.error}<br></br>
                <input name="code" type="text" /><br></br>
                <button type="submit">Join</button>
                </form>
            </div>
            </div>
            </div>
        )
    }
}