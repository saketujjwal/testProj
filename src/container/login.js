import React , {Component} from 'react';
import {connect} from 'react-redux'

import Paper from '@material-ui/core/Paper'

import * as action from '../actions';
import SignUp from '../component/signUp'
import SignIn from '../component/signIn'

const actions = action.default;
class Login extends Component {
    render(){
        const {
            signInClicked,
            signIn,
            signUp,
            handlePassword,
            handleUserName,
            id,
            firstName,
            lastname,
            emailAddress,
            phone,
            userName,
            password,
            signUpUser,
            handleSignUpFirstNameChange,
            handleSignUpLastNameChange,
            handleSignUpEmailChange,
            handleSignUpPhoneChange,
            handleSignUpUserNameChange,
            handleSignUpPasswordChange,
            history
        } = this.props
        return(
            <Paper className='layout'>
                {signInClicked 
                ? <SignUp 
                    signUp= {signUp}
                    firstName = {firstName}
                    lastname = {lastname}
                    emailAddress = {emailAddress}
                    phone = {phone}    
                    history={history}  
                    signUpUser={signUpUser}

                    handleSignUpFirstNameChange = {handleSignUpFirstNameChange}
                    handleSignUpLastNameChange = {handleSignUpLastNameChange}
                    handleSignUpEmailChange = {handleSignUpEmailChange}
                    handleSignUpPhoneChange = {handleSignUpPhoneChange}
                    handleSignUpUserNameChange = {handleSignUpUserNameChange}
                    handleSignUpPasswordChange = {handleSignUpPasswordChange}
                  /> 
                : <SignIn 
                    signIn = {signIn}
                    signUp= {signUp}
                    handleUserName = {handleUserName}
                    handlePassword = {handlePassword}
                    id={id}
                    userName = {userName}
                    password = {password}
                    history={history}
                />}
            </Paper>
        )
    }
}

function mapStateToProps(state) {
    return{
        signInClicked: state.login.signInClicked,
        id:state.login.id,
        firstName:state.login.firstName,
        lastname:state.login.lastname,
        emailAddress:state.login.emailAddress,
        phone:state.login.phone,
        userName: state.login.userName,
        password: state.login.password
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signUp: (e,data) => dispatch(actions.signUp(e,data)),
        signIn: (e,data) => dispatch(actions.signIn(e,data)),
        signUpUser: (e, data) => dispatch(actions.signUpUser(e, data)),
        handleUserName: (e) => dispatch(actions.handleUserName(e)),
        handlePassword: (e) => dispatch(actions.handlePassword(e)),
        handleSignUpFirstNameChange: (e) => dispatch(actions.handleSignUpFirstNameChange(e)),
        handleSignUpLastNameChange: (e) => dispatch(actions.handleSignUpLastNameChange(e)),
        handleSignUpEmailChange: (e) => dispatch(actions.handleSignUpEmailChange(e)),
        handleSignUpPhoneChange: (e) => dispatch(actions.handleSignUpPhoneChange(e)),
        handleSignUpUserNameChange: (e) => dispatch(actions.handleSignUpUserNameChange(e)),
        handleSignUpPasswordChange: (e) => dispatch(actions.handleSignUpPasswordChange(e))
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);