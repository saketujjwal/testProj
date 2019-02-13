import React from 'react';
import {Link} from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const ContactList = (props) => {
    const {
        contactList,
        editUser,
        showConfirmationDialog
    } = props
    return(
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        contactList && contactList.contacts && contactList.contacts.map(contact => {
                            return(
                                <TableRow key={contact.id}> 
                                    <TableCell>{contact.firstName}</TableCell>
                                    <TableCell>{contact.lastName}</TableCell>
                                    <TableCell>{contact.age}</TableCell>
                                    <TableCell>{contact.phone}</TableCell>
                                    <TableCell><Link to='/contactEdit' className='mdi mdi-account-edit' onClick={(e) => editUser(e, contact)}></Link></TableCell>
                                    <TableCell><span className='mdi mdi-delete-forever' onClick={() => showConfirmationDialog(contact)}></span></TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default ContactList;