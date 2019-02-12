import React, { Component } from 'react'
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom'

import Contact from './contact';
import  ContactEdit from './contactEdit';
import AddNewContact from './addNewContact'

class Main extends Component {
    render() {
        return(
                <Switch>
                    <Route exact path='/' render={props => <Contact {...props}/>}/>
                    <Route path='/contactEdit' render={props =><ContactEdit {...props}/>} />
                    <Route path='/addNewContact' render={props => <AddNewContact {...props}/>} />
                </Switch>
        )
    }
}

export default Main