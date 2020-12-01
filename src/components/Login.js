import React from 'react'
import {Link} from 'react-router-dom'
import {API_ROOT, GET_HEADERS} from '../constants/index'

export default class Login extends React.Component{

    state = {
        type: 'login',
        errors: " "
    }

    loginRender = () => {
        return(
            <>
                <form onSubmit={this.loginSubmit}>
                    <h2>Please Login</h2>
                    <input type="text" name="email" placeholder="email" />
                    <input type="password" name="password" placeholder="password" /><br></br>
                    <button type="submit">Submit</button>
                </form>
                <a className="accountCreate" onClick={() => this.setState({type: 'signup'})}>Don't Have an Account? Create One!</a>
            </>

        )
    }

    loginSubmit = e => {
        e.preventDefault()
        const {email, password} = e.target
        const reqObj = {
            method: 'POST',
            headers: GET_HEADERS(),
            body: JSON.stringify({email: email.value, password: password.value})
        }
        fetch(`${API_ROOT}/admin/login`, reqObj)
        .then(resp => resp.json())
        .then(data => {
            if (data.errors) {
                this.setState({errors: data.errors})
            } else {
                localStorage.setItem('adminToken', data.token)
                this.props.history.push(`/adminPage/${data.admin.id}`)
            }
        })
    }

    createRender = () => {
        return(
        <>
            <form onSubmit={this.submitForm}>
                <h2>Create an Account</h2>
                <input type="text" name="first_name" placeholder="First Name" />
                <input type="text" name="last_name" placeholder="Last Name" /><br></br>
                <input type="email" name="email" placeholder="Email" /><br></br>
                <input type="password" name="password" placeholder="Password" />
                <input type="password" name="confirm" placeholder="Confirm Password" /><br></br>
                <button type="submit">Submit</button>
            </form>
        </>
        )
    }

    submitForm = e => {
        e.preventDefault()
        const {first_name, last_name, email, password, confirm} = e.target
        if (password.value === confirm.value) {
            this.sendFetch(first_name.value, last_name.value, email.value, password.value)
        } else {
            this.setState({type: 'signup', errors: 'Passwords do not match'})
        }
    }

    sendFetch = (first_name, last_name, email, password) => {
        const reqObj = {
            method: 'POST',
            headers: GET_HEADERS(),
            body: JSON.stringify({admin: {first_name, last_name, email, password}})
        }

        fetch(`${API_ROOT}/admin`, reqObj)
        .then(resp => resp.json())
        .then(data => {
            if (data.errors) {
                this.setState({type: 'signup', errors: data.errors})
            } else {
                localStorage.setItem('adminToken', data.token)
                this.props.history.push(`/adminPage/${data.admin.id}`)
            }
        })
    }

    renderErrors = () => {
        return(
        <>
            <p className="errors">{this.state.errors}</p>
        </>
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
                {this.renderErrors()}
                {this.state.type === 'login' ? 
                this.loginRender()
                :
                this.createRender()}
            </div>
            </div>
            </div>
        )
    }
}