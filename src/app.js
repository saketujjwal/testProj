import React, {Component} from 'react';
import {Router , Route , Switch } from 'react-router-dom'
import {createBrowserHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from '../storeConfig';

import LeftNavigation from '../src/component/leftNavigation';
import Header from '../src/component/header';
import Main from '../src/container/main';
import Footer from '../src/component/footer'

const store= configureStore();

class App extends Component {
    render() {
        const history=createBrowserHistory();
        return(
            <Provider store={store}>
                <Router history={history}>
                    <div className='main'> 
                        <Header headerText={'Contact Details'} history={history}/>
                        <LeftNavigation />
                        <Main {...this.props}/>
                        <Footer />
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App