import React from 'react'
import {Link} from 'react-router-dom'
import { Checkbox } from 'pretty-checkbox-react'
import '@djthoms/pretty-checkbox'
import { API_ROOT, GET_HEADERS } from '../constants'

export default class createEvent extends React.Component{

    state = {
        checked: false,
        errors: ""
    }

    submitForm = e => {
        e.preventDefault()
        const {start, end, max_price, notes} = e.target
        let body = {admin_id: this.props.match.params.id, start: start.value, end: end.value, max_price: max_price.value, notes: notes.value}
        if (this.state.checked === true) {
            body['add'] = this.state.checked
        }
        const reqObj = {
            method: 'POST',
            headers: GET_HEADERS(),
            body: JSON.stringify({events: body})
        }
        fetch(`${API_ROOT}/events`, reqObj)
        .then(resp => resp.json())
        .then(data => {
            if (!data.errors) {
                this.props.history.push(`/eventPage/${data.code}`)
            } else {
                this.setState({errors: data.errors})
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
                <form onSubmit={this.submitForm}>
                    <h2>Create a New Secret Santa Event</h2>
                    <h3>Optional Fields</h3>
                    <label>Day Gift Delivering Can Begin</label><br></br>
                    <input name="start" type="date" /><br></br>
                    <label>Day Gift Delivering Can End</label><br></br>
                    <input name="end" type="date" /><br></br>
                    <label>Maximum Price for Gift</label><br></br>
                    $<input type="number" name="max_price" /><br></br>
                    <textarea className="notes" name="notes" placeholder="Any Additional Notes for Participants" /><br></br>
                    <Checkbox onChange={() => this.setState({checked: !this.state.checked})} color="danger" name="add" /><label>Check if you are also a participant in the event</label><br></br><br></br>
                    <button type="submit">Create</button>
                </form>
            </div>
            </div>
            </div>
        )
    }
}