import React from 'react';
import {Link} from 'react-router-dom'

import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const AddNewUser = (props) => {
    const {
        handleFirstNameChange,
        handleLastNameChange,
        handleAgeChange,
        handlePhoneChange,
        addContact,
        history
    } = props;
    return (
        <form className='addNewContact'> 
            <div style = {{justifyContent:'space-around'}}>
                <TextField
                id="firstName"
                label="First Name"
                placeholder='firstName'
                onChange={handleFirstNameChange}
                margin="normal"
                />

                <TextField
                id="lastName"
                label="Last Name"
                placeholder='lastName'
                onChange={handleLastNameChange}
                margin="normal"
                />
            </div>

            <div style = {{justifyContent:'space-around'}}>
                <TextField
                    id="age"
                    label="Age"
                    placeholder='age'
                    onChange={handleAgeChange}
                    margin="normal"
                    />

                <TextField
                    id="phone"
                    label="Phone"
                    placeholder='phone'
                    onChange={handlePhoneChange}
                    margin="normal"
                    />
            </div>
            <div style = {{marginTop: '20%' , justifyContent:'flex-end'}}>

            <Link to='/' className = 'margin-right-2 secondryButton'> Cancel</Link>

            <Button 
                variant="contained" 
                color="primary"
                onClick={(e) => addContact(history,e)}
                >
                Add
            </Button>
            </div>
        </form>
    )
};

export default AddNewUser;