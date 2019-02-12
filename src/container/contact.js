import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import Paper from '@material-ui/core/Paper'

import * as action from '../actions'
import ContactList from '../component/contactList'
import ActionHeader from '../component/actionHeader'

const actions=action.default;

class Contact extends Component {
    componentDidMount(){
        this.props.loadInitialData(true)
    }   
    render() {
        const {
            isLoadedBool,
            contactList
        } = this.props;
        return(
            <Paper className='layout column'> 
                <ActionHeader />
                <ContactList contactList={contactList}/>
            </Paper>
        )
    }
}

function mapStateToProps(state) {
    return {
        isLoadedBool:state.isLoaded,
        contactList: state.contact.data
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadInitialData: data => dispatch(actions.loadInit(data))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps 
    )(Contact);