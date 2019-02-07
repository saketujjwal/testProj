import React, { Component } from 'react'
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom'

import Home from './home'
import  About from './about'

class Main extends Component {
    render() {
        const props=this.props;
        return(
                <Switch>
                    <Route exact path='/' render={props => <Home {...props}/>}/>
                    <Route path='/about' render={props =><About {...props}/>} />
                </Switch>
        )
    }
}

export default Main