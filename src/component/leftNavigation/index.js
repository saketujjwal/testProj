import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'

class LeftNavigation extends Component {
    render() {
        return(
            <div>
                <Drawer
                    variant='permanent'
                    anchor='left'
                >
                <List className={'marginTop-10 navStyle'}>
                    <ListItem className='menuStyle'>
                        Menu
                    </ListItem>
                    <ListItem>
                        <Link to='/'>Home</Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/about'>About</Link>
                    </ListItem>
                </List>
                </Drawer>
            </div>
        )
    }

}

export default LeftNavigation;