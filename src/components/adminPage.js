import React from 'react'
import {Link} from 'react-router-dom'
import {API_ROOT, GET_HEADERS, GET_REQ} from '../constants/index'

export default class adminPage extends React.Component{

    state = {
        admin: null,
        loggedIn: true
    }

    componentDidMount(){
        const id = this.props.match.params.id
        fetch(`${API_ROOT}/auto_login`, GET_REQ())
        .then(resp => resp.json())
        .then(data => {
            this.setState({admin: data})
        })
    }

    renderNotLogged = () => {
        return(
            <>
            <h2>Please Login to View This Page</h2>
            <Link to="/login"><button>Go to Login</button></Link>
            </>
        )
    }

    renderPage = () => {
        const {events, id} = this.state.admin
        return(
        <>
        <h2>Welcome, {this.state.admin.first_name}</h2>
            <Link to={`/createEvent/${id}`}><button>Create an Event</button></Link>
                <h1>My Events</h1>
                {events.length > 0 ? 
                    this.renderEvents()
                :
                    this.renderNoEvents()
                }
        </>
        )
    }

    renderEvents = () => {
        return this.state.admin.events.map(event => {
            return <li>{event.code}</li>
        })
    }

    renderNoEvents = () => {
        return(
            <p>You have no events yet.</p>
        )
    }
    render(){
        return(
            <div className="screen">
            <div className="pageBody">
            <div className="welcome">
                <Link to="/"><h1 className="ss">❄❄❄ Secret Santa ❄❄❄</h1></Link>
            </div>
            <div className="options">
                {this.state.admin !== null ?
                    this.renderPage()
                :
                    this.renderNotLogged()}
            </div>
            </div>
            </div>
        )
    }
}