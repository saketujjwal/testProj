import React , {Component} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper'

import HolidayDetails from '../component/holidayDetails'

class About extends Component {
    render() {
        const {
            holidayList,
            selectedRow
        }=this.props
        const selectedItem = holidayList.holidays[selectedRow]
        return(
            <Paper className='layout'>
                ABOUT PAGE
                <HolidayDetails holidays={selectedItem}/>
            </Paper>
        )
    }
}

function mapStateToProps(state) {
    return {
        selectedRow:state.about.selectedRow,
        holidayList:state.home.data
    }
}

function mapDispatchToProps(dispatch){
    return {
        
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(About)