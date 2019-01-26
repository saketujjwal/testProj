import React, { Component } from 'react'
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom'

import Home from './home'
import  About from './about'

class Main extends Component {
    render() {
        return(
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About} />
                </Switch>
        )
    }
}

export default Main