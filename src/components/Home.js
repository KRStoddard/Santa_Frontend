import React from 'react'
import {Link} from 'react-router-dom'
import { API_ROOT, GET_REQ } from '../constants'

export default class Home extends React.Component{

    //state for component class
    state = {
        admin: ""
    }

    //checks whether user is a logged-in admin
    componentDidMount(){
        fetch(`${API_ROOT}/auto_login`, GET_REQ())
        .then(resp => resp.json())
        .then(data => {
            if (data.id) {
                this.setState({admin: data})
            }
        })
    }

    //renders button based on whether the user is a logged-in admin
    renderButton = () => {
        if (!this.state.admin.id) {
            return <Link to="/login"><button>Login</button></Link> 
        } else {
            return <Link to={`/adminPage/${this.state.admin.id}`}><button>Go To Admin Page</button></Link> 
        }
        
    }

    //renders page
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
                {this.renderButton()}
                <h2>To Start/Manage An Event</h2>
            </div>
            </div>
            </div>
        )
    }
}