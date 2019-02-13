import React, {Component} from 'react';
import {connect} from 'react-redux';

import Paper from '@material-ui/core/Paper'

import * as action from '../actions'
import AddNewContactComponent from '../component/contactDetails'

const actions = action.default;
class AddNewContact extends Component {

    render(){
        const {
            handleFirstNameChange,
            handleLastNameChange,
            handleAgeChange,
            handlePhoneChange,
            addContact,
            history
        }=this.props
        return(
            <Paper className='layout'>
                <AddNewContactComponent 
                actionButtonText = {'Add'}
                handleFirstNameChange = {handleFirstNameChange}
                handleLastNameChange = {handleLastNameChange}
                handleAgeChange = {handleAgeChange}
                handlePhoneChange = {handlePhoneChange}
                addContact = {addContact}
                history={history}
                />
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
        loadInitialData: data => dispatch(actions.loadInit(data)),
        handleFirstNameChange: data => dispatch(actions.handleFirstNameChange(data)),
        handleLastNameChange: data => dispatch(actions.handleLastNameChange(data)),
        handleAgeChange: data => dispatch(actions.handleAgeChange(data)),
        handlePhoneChange: data => dispatch(actions.handlePhoneChange(data)),
        addContact: (e,history) => dispatch(actions.addEditContact(e, history))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(AddNewContact)