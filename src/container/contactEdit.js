import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import * as action from '../actions';
import Paper from '@material-ui/core/Paper'

import AddNewContact from '../component/contactDetails'

const actions=action.default;
class EditContactDetails extends Component {
    render() {
        const{
            firstName,
            lastName,
            age,
            phone,
            handleFirstNameChange,
            handleLastNameChange,
            handleAgeChange,
            handlePhoneChange,
            addContact,
            history
        } = this.props
        return(
            <Paper className='layout'>
                <AddNewContact 
                actionButtonText = {'edit'}
                firstName = {firstName}
                lastName = {lastName}
                age = {age}
                phone = {phone}
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
        firstName:state.contactDetails.firstName,
        lastName: state.contactDetails.lastName,
        age:state.contactDetails.age,
        phone:state.contactDetails.phone
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadInitialData: data => dispatch(actions.loadInit(data)),
        editUser: (e,data) => dispatch(actions.editUser(e,data)),
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
    )(EditContactDetails);