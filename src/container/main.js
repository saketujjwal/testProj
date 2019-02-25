import React, { Component } from 'react'
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom'

import Login from './login';
import Contact from './contact';
import  ContactEdit from './contactEdit';
import AddNewContact from './addNewContact'

class Main extends Component {
    render() {
        return(
                <Switch>
                    <Route exact path='/' render={props => <Login {...props}/>}/>
                    <Route path='/contactList' render={props => <Contact {...props}/>}/>
                    <Route path='/contactEdit' render={props =><ContactEdit {...props}/>} />
                    <Route path='/addNewContact' render={props => <AddNewContact {...props}/>} />
                </Switch>
        )
    }
}

export default Main