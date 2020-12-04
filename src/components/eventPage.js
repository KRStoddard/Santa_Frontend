import { nodeName } from 'jquery'
import React from 'react'
import {Link} from 'react-router-dom'
import { API_ROOT, GET_HEADERS, GET_REQ, LOGOUT } from '../constants'

export default class eventPage extends React.Component{

    //state for class component
    state = {
        event: {},
        sent: false
    }

    //loads page or sends user back to homepage if not logged in
    componentDidMount(){
        fetch(`${API_ROOT}/events/${this.props.match.params.id}`, GET_REQ())
        .then(resp => resp.json())
        .then(event => {
            if (event.message) {
                this.props.history.push('/')
            }
             else if (event.users[0] && !event.users[0].match) {
            this.setState({event})
            } else {
                this.setState({event: event, sent: true})
            }
        })
    }

    //renders list of users signed up for event or tells admin there aren't any yet
    renderUsers = () => {
            if (this.state.event['users'] && this.state.event.users.length > 0) {
                    return this.state.event.users.map(user => {
                        return <li>{user.first_name + ' ' + user.last_name}</li>
                    })
                } else {
                    return <li style={{listStyle: 'none'}}>No one has signed up yet!</li>
                }
    }

    //starts backend process of matching a user to their Secret Santa giftee and
    //sends out the email letting them know
    startMatch = () => {
        const reqObj = {
            method: 'PATCH',
            headers: GET_HEADERS(),
        }

        fetch(`${API_ROOT}/events/${this.state.event.code}`, reqObj)
        .then(() => {
            alert('Emails with Secret Santa matches have been sent out!')
            this.setState({sent: true})
        })
    }

    //renders button based on whether or not matches have already been made
    //and whether matches can be made (if there is only one person signed up
    //the option available is to end the event, not match a single person to themself)
    renderButton = () => {
        if (this.state.sent === false && this.state.event.users && this.state.event.users.length > 1) {
            return <button onClick={this.startMatch} className="matchesButton">Close Signups/Send out Matches!</button>
        } else {
            return <button onClick={this.endEvent} className="matchesButton">End Event</button>
        }
    }

    //ends the event and deletes the information from the backend
    endEvent = () => {
        const reqObj = {
            method: 'DELETE',
            headers: GET_HEADERS()
        }

        fetch(`${API_ROOT}/events/${this.state.event.code}`, reqObj)
        .then(() => {this.props.history.push('/')})
    }

    //logs out the admin and removes the JWT token
    logout = () => {
        LOGOUT()
        this.props.history.push('/')
    }

    //renders the page
    render(){
        const {code, start, end, max_price, notes} = this.state.event
        return(
            <div className="screen">
                <button onClick={this.logout} className="logout">Logout</button>
            <div className="pageBody">
            <div className="welcome">
                <Link to="/"><h1 className="ss">❄❄❄ Secret Santa ❄❄❄</h1></Link>
            </div>
            <div className="options eventPage">
                <div className="event-code">
                    <h2>Event Code: {code}</h2>
                </div>
                {this.renderButton()}
                <div className="dates">
                        {start ? 
                            <div>
                            <h4>Start Date</h4>
                            <p>{start}</p>
                            </div>
                        :
                            null}
                    
                        {end ? 
                            <div>
                            <h4>End Date</h4>
                            <p>{end}</p>
                            </div>
                        :
                            null}
                </div>
                {max_price ? 
                    <>
                    <h4>Max Price: ${max_price}</h4>
                    </>
                :
                    null}
                {notes ? 
                    <>
                    <h4>Additional Notes</h4>
                    <p>{notes}</p>
                    </>
                :
                    null}
            </div>
            <div className="people">
                <h3>People Signed up</h3>
                <ol>
                {this.renderUsers()}
                </ol>
            </div>
            </div>
            </div>
        )
    }
}