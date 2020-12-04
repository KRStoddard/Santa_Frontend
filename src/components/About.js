import React from 'react'
import {Link} from 'react-router-dom'
import { API_ROOT, GET_REQ } from '../constants'

export default class About extends React.Component{

    //renders page
    render(){
        return(
            <div className="screen">
                <div className="snowfall">
            <div className="pageBody">
            <div className="welcome">
                <Link to="/"><h1 className="ss">❄❄❄ Secret Santa ❄❄❄</h1></Link>
            </div>
            <div className="options">
                <h2>About this Site</h2>
                <p>
                    Due to the Covid-19 Pandemic, many people have less money this year to buy everyone a gift. 
                    A good solution is to do a Secret Santa exchange - that way, everyone in the event gives one gift and gets one gift.
                    It's a fun, fair, and easy way to ensure everyone has an exciting and low-stress holiday.
                </p>
                <p>
                    Secret Santa is usually run by having everyone draw names out of a hat. However, if people are choosing not to get together due 
                    to the pandemic, someone would have to voluntarily give up their ability to participate in order to match everyone up. And that's not fair!
                    So that's where this website comes in. It will assign people for you.
                </p>
                <h2>How it Works</h2>
                <p>
                    One person is going to act as the administrator "admin" for the event. They will create an account and, from there, create the event.
                    This person can enter optional fields for the event, including: the start date of the event (when people can start sending presents),
                    the end date of the event (the last date to deliver presents), the maximum price a person is supposed to spend for the event, and a notes section
                    to include any other additional information they want to add.
                </p>
                <p>
                    Once an event is created, the admin will see at the top of the page an 8-digit code for the event. They will hand this out to everyone
                    they want to participate. The admin will also be able to see the name of each person who signs up.
                </p>
                <p>
                    A person signing up will not need to make an account. From the homescreen, they will simply press "Join Event" and 
                    enter the 8-digit code where prompted. They will then put in their first name, last name, email, and an open notes field 
                    in case they want to include any other information, such as gift ideas for their Secret Santa. Note that a person can only use
                    their name once per event. 
                </p>
                <p>
                    Once the admin determines that everyone has signed up, they will go to the event page and click the button to end sign-ups. Once this has been done,
                    the site will automatically give each person another person in the group to get a gift for. An email will be sent to the one they used to join the event 
                    that includes the full name of their match and anything listed in the notes/gift idea their recipient included.
                </p>
                <p>
                    Once the event is completely over, the admin can go into the event page and completely end the event.
                    And that's it!
                </p>
                <h3>Happy Holidays!!</h3>
            </div>
            </div>
            </div>
            </div>
        )
    }
}