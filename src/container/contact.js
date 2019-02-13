import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import Paper from '@material-ui/core/Paper'

import * as action from '../actions'
import ContactList from '../component/contactList'
import ActionHeader from '../component/actionHeader'
import ConfirmationBox from '../component/confirmationBox'

const actions=action.default;

class Contact extends Component {
    componentDidMount(){
        this.props.loadInitialData(true)
    }   
    render() {
        const {
            isLoadedBool,
            contactList,
            editUser,
            deleteUser,
            history,
            showConfirmationDialog,
            contact,
            showDialog,
            closeDialog
        } = this.props;
        return(
            <Paper className='layout column'> 
                <ActionHeader />
                <ContactList 
                    contactList={contactList}
                    editUser={editUser}
                    history={history}
                    showConfirmationDialog={showConfirmationDialog}
                />
                <ConfirmationBox 
                    showDialog = {showDialog}
                    deleteUser = {deleteUser}
                    history={history}
                    contact={contact}
                    closeDialog={closeDialog}
                />
            </Paper>
        )
    }
}

function mapStateToProps(state) {
    return {
        isLoadedBool:state.isLoaded,
        contactList: state.contact.data,
        contact: state.contact.selectedContact,
        showDialog: state.contact.showDialogBool
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadInitialData: data => dispatch(actions.loadInit(data)),
        editUser: (e,data) => dispatch(actions.editUser(e,data)),
        deleteUser: (e,data , history) => dispatch(actions.deleteUser(e,data,history)),
        showConfirmationDialog: (data) => dispatch(actions.showConfirmationDialog(data)),
        closeDialog: () => dispatch(actions.closeDialog())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps 
    )(Contact);