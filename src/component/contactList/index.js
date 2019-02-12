import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';


const ContactList = (props) => {
    const {
        contactList
    } = props
    return(
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Phone</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {
                    contactList && contactList.contacts && contactList.contacts.map(contact => {
                        return(
                            <TableRow>
                                <TableCell>{contact.firstName}</TableCell>
                                <TableCell>{contact.lastName}</TableCell>
                                <TableCell>{contact.age}</TableCell>
                                <TableCell>{contact.phone}</TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
    )
}

export default ContactList;