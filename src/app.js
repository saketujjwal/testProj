import React, {Component} from 'react';
import {Router , Route , Switch } from 'react-router-dom'
import {createBrowserHistory} from 'history';

import LeftNavigation from '../src/component/leftNavigation';
import Header from '../src/component/header';
import Main from '../src/component/container/main';
import Footer from '../src/component/footer'


class App extends Component {
    render() {
        const history=createBrowserHistory();
        return(
            <Router history={history}>
                <div className='main'> 
                    <Header headerText={'This is Header Component'}/>
                    <LeftNavigation {...this.props}/>
                    <Main />
                    <Footer />
                </div>
            </Router>
            
        )
    }
}

export default App