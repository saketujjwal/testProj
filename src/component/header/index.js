import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'

import * as action from '../../actions'

const actions = action.default;


class Header extends Component {
    render(){
        const {
            headerText,
            isLoginPage,
            logout,
            history
        } = this.props;
        return(
            <div className='header'>
                {headerText}
                {
                    !isLoginPage &&
                    <Button onClick={(e) => logout(e, history)} className='logout'>Logout</Button>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        isLoginPage: state.contact.isLoginPage
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout:(e,data) => dispatch(actions.logout(e, data))
    }

}

export default connect(
mapStateToProps,
mapDispatchToProps
)(Header);