import React from 'react'

import {Link} from 'react-router-dom'

const ActionHeader = ()=> {
    return(
        <div className='actionHeader'> 
            <ul>
                <li>
                    <Link to='/addNewContact' className='mdi mdi-contacts no-underline'>Add Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default ActionHeader