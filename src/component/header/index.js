import React, {Component} from 'react';

class Header extends Component {
    render(){
        const {
            headerText
        } = this.props;
        return(
            <div className='header'>
                {headerText}
            </div>
        )
    }
}

export default Header;