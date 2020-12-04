import React from 'react'
import {Link} from 'react-router-dom'
import {API_ROOT, GET_HEADERS, GET_REQ, LOGOUT} from '../constants/index'


export default class adminPage extends React.Component{

    //state for class component
    state = {
        admin: {},
        loggedIn: true
    }

    //checks to make sure admin is logged in
    componentDidMount(){
        const id = this.props.match.params.id
        fetch(`${API_ROOT}/auto_login`, GET_REQ())
        .then(resp => resp.json())
        .then(data => {
            this.setState({admin: data})
        })
    }

    //Prompts user to login if they are not
    renderNotLogged = () => {
        return(
            <>
            <h2>Please Login to View This Page</h2>
            <Link to="/login"><button>Go to Login</button></Link>
            </>
        )
    }

    //changes how page displays based on whether or not the user has events
    renderPage = () => {
        const {events, id} = this.state.admin
        return(
        <>
        <h2>Welcome, {this.state.admin.first_name}</h2>
            <Link to={`/createEvent/${id}`}><button>Create an Event</button></Link>
                <h1>My Events</h1>
                {events && events.length > 0 ? 
                    this.renderEvents()
                :
                    this.renderNoEvents()
                }
        </>
        )
    }

    //renders list of events if the user has them
    renderEvents = () => {
        return this.state.admin.events.map(event => {
            return <Link to={`/eventPage/${event.code}`}><li className="event-links">- {event.code} -</li></Link>
        })
    }

    //tells the user they have no events yet if they don't
    renderNoEvents = () => {
        return(
            <p>You have no events yet.</p>
        )
    }

    //logs out the user, clearing the JWT token
    logout = () => {
        LOGOUT()
        this.props.history.push('/')
    }

    //renders page
    render(){
        return(
            <div className="screen">
                <button onClick={this.logout}className="logout">Logout</button>
            <div className="pageBody">
            <div className="welcome">
                <Link to="/"><h1 className="ss">❄❄❄ Secret Santa ❄❄❄</h1></Link>
            </div>
            <div className="options">
                {this.state.admin.id ?
                    this.renderPage()
                :
                    this.renderNotLogged()}
            </div>
            </div>
            </div>
        )
    }
}