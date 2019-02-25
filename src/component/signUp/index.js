import React from 'react'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const SignUp = (props) => {
    const {
        firstNameSignUp,
        lastnameSignUp,
        emailAddressSignUp,
        phoneSignUp,
        userNameSignUp,
        passwordSignUp,
        handleSignUpFirstNameChange,
        handleSignUpLastNameChange,
        handleSignUpEmailChange,
        handleSignUpPhoneChange,
        handleSignUpUserNameChange,
        handleSignUpPasswordChange,
        signUp,
        signUpUser,
    } = props;
    return(
        <form className='addNewContact'> 
         <div style = {{justifyContent:'space-around'}}>
            <TextField
                id="userName"
                label="UserName"
                placeholder='userName'
                onChange={handleSignUpUserNameChange}
                margin="normal"
                value={userNameSignUp}
                />

                <TextField
                id="password"
                label="Password"
                placeholder='password'
                onChange={handleSignUpPasswordChange}
                margin="normal"
                value={passwordSignUp}
                />
            </div>
            <div style = {{justifyContent:'space-around'}}>
            <TextField
                id="firstName"
                label="First Name"
                placeholder='firstName'
                onChange={handleSignUpFirstNameChange}
                margin="normal"
                value={firstNameSignUp}
                />

                <TextField
                id="lastName"
                label="Last Name"
                placeholder='lastName'
                onChange={handleSignUpLastNameChange}
                margin="normal"
                value={lastnameSignUp}
                />
            </div>

            <div style = {{justifyContent:'space-around'}}>
                <TextField
                    id="email"
                    label="Email Address"
                    placeholder='email'
                    onChange={handleSignUpEmailChange}
                    margin="normal"
                    value={emailAddressSignUp}
                    />

                <TextField
                    id="phone"
                    label="Phone"
                    placeholder='phone'
                    onChange={handleSignUpPhoneChange}
                    margin="normal"
                    value={phoneSignUp}
                    />
            </div>
            <div style = {{marginTop: '20%' , justifyContent:'flex-end'}}>

            <Link href='javascript:' onClick = {(e)=>signUp(e,false)} className = 'margin-right-2 secondryButton'>Cancel</Link>

            <Button 
                variant="contained" 
                color="primary"
                onClick={(e) => signUpUser(e,history)}
                >
                Sign Up
            </Button>
            </div>
        </form>
    )
}

export default SignUp;