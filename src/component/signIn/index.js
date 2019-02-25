import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

const SignIn = (props) => {
    const {
        signIn,
        signUp,
        id,
        userName,
        password,
        handleUserName,
        handlePassword,
        history
    } = props;

    return (
        <Paper className='signIn'> 
            <div className='column' style = {{width: '100%',paddingRight: '5%'}}>
            <h1>Sign In</h1>
                <TextField
                    id="userName"
                    label="UserName"
                    placeholder='userName'
                    onChange={handleUserName}
                    margin="normal"
                    value={userName}
                />

                <TextField
                    id="password"
                    label="Password"
                    placeholder='password'
                    onChange={handlePassword}
                    margin="normal"
                    value={password}
                    type='password'
                />
                <div style = {{marginTop: '5%' , justifyContent:'flex-end'}}>
                    <Button 
                        variant="contained" 
                        color="primary"
                        onClick={(e) => signIn(e, history)}
                        >
                        Sign In
                    </Button>
                </div>

                <div style = {{marginTop: '5%' , justifyContent:'flex-start'}}>
                    Don't have an account ?  
                    <Link href='javascript:' onClick = {(e)=>signUp(e,true)}> Sign Up</Link>
                </div>
            </div>
        </Paper>
    )
}

export default SignIn;