import React from 'react'
import {Link} from 'react-router-dom'
import {API_ROOT, GET_HEADERS, GET_REQ} from '../constants/index'

export default class joinPage extends React.Component{

    state = {
        event: {},
        errors: []
    }

    componentDidMount(){
        fetch(`${API_ROOT}/events/${this.props.match.params.id}`, GET_REQ())
        .then(resp => resp.json())
        .then(event => this.setState({event}))
    }

    submitForm = e => {
        e.preventDefault()
        const {first_name, last_name, email} = e.target
        const reqObj = {
            method: 'POST',
            headers: GET_HEADERS(),
            body: JSON.stringify({users: {first_name: first_name.value, last_name: last_name.value, email: email.value, event_id: this.state.event.id}})
        }

        fetch(`${API_ROOT}/users`, reqObj)
        .then(resp => resp.json())
        .then(data => {
            if (!data.errors) {
                alert(`Thank you, ${data.first_name}. Your information has been received and you will be sent an email with the name of the person you are to give a gift to once the admin closes the sign-up.`)
                this.props.history.push('/')
            } else {
                this.setState({errors: data.errors})
            }
        })
    }

    render(){
        const {code, start, end, max_price, notes} = this.state.event
        return(
            <div className="screen">
            <div className="pageBody">
            <div className="welcome">
                <h2>Welcome to</h2>
                <h1 className="ss">❄❄❄ Secret Santa ❄❄❄</h1>
            </div>
            <div className="options eventPage">
            <div className="event-code">
                <h2>Event Code: {code}</h2>
            </div>
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
            <form onSubmit={this.submitForm}>
                <h2>Please Fill Out Information* to Join Event</h2>
                <p>{this.state.errors}</p>
                <input type="text" name="first_name" placeholder="First Name" />
                <input type="text" name="last_name" placeholder="Last Name" /><br></br>
                <input type="email" name="email" placeholder="Email" /><br></br>
                <button type="submit">Submit</button>
            </form>
            <p>*Your first and last name will be shared with the group admin and your secret santa. Your email will not. Please use a valid email; it is how we send you your match's name.</p>
            </div>
            </div>
        )
    }
}