import React from 'react'
import {Link} from 'react-router-dom'
import { API_ROOT, GET_HEADERS, GET_REQ } from '../constants'

export default class eventPage extends React.Component{

    state = {
        event: {},
        sent: false
    }

    componentDidMount(){
        fetch(`${API_ROOT}/events/${this.props.match.params.id}`, GET_REQ())
        .then(resp => resp.json())
        .then(event => {
            if (!event.users[0].match) {
            this.setState({event})
            } else {
                this.setState({event: event, sent: true})
            }
        })
    }

    renderUsers = () => {
        if (this.state.event['users']) {
            if (this.state.event.users.length > 0) {
                if (this.state.event.users.length > 0) {
                    return this.state.event.users.map(user => {
                        return <li>{user.first_name + ' ' + user.last_name}</li>
                    })
                } else {
                    return <li>No one has signed up yet!</li>
                }
            }
        }
    }

    startMatch = () => {
        console.log('hits start')
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

    renderButton = () => {
        if (this.state.sent === false) {
            return <button onClick={this.startMatch} className="matchesButton">Close Signups/Send out Matches!</button>
        } else {
            return <button onClick={this.endEvent} className="matchesButton">End Event</button>
        }
    }

    endEvent = () => {
        console.log('end!')
    }


    render(){
        const {code, start, end, max_price, notes} = this.state.event
        return(
            <div className="screen">
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