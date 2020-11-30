import React from 'react'
import {Link} from 'react-router-dom'

export default class Login extends React.Component{

    state = {
        type: 'login'
    }

    loginRender = () => {
        return(
            <>
                <form>
                    <h2>Please Login</h2>
                    <input type="text" placeholder="email" />
                    <input type="password" placeholder="password" /><br></br>
                    <button>Submit</button>
                </form>
                <a className="accountCreate" onClick={() => this.setState({type: 'signup'})}>Don't Have an Account? Create One!</a>
            </>

        )
    }

    createRender = () => {
        return(
        <>
            <form>
                <h2>Create an Account</h2>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" /><br></br>
                <input type="email" placeholder="Email" /><br></br>
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" /><br></br>
                <button>Submit</button>
            </form>
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