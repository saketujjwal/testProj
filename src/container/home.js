import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import Paper from '@material-ui/core/Paper'

import * as action from '../actions'
import HolidayList from '../component/holidayList'

const actions=action.default;
class Home extends Component {
    componentDidMount(){
        this.props.loadInit(true)
    }
    render() {
        const {
            isLoadedBool,
            holidayList,
            loadHolidayDetails,
            history
        } = this.props;
        return(
            <Paper className='layout'> 
                HOME PAGE
                <div>
                    {/* <a target='_blank' href='https://holidayapi.com/v1/holidays?key=de5b998b-8778-4439-ab33-42d0bcbb214b&country=US&year=2015'>
                        API Response
                    </a> */}
                    <HolidayList 
                        holidayList = {holidayList}
                        loadHolidayDetails={loadHolidayDetails}
                        history={history}
                    />
                </div>


            </Paper>
        )
    }
}

function mapStateToProps(state) {
    return {
        isLoadedBool:state.isLoaded,
        holidayList:state.home.data
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadInit: data => dispatch(actions.loadInit(data)),
        loadHolidayDetails: (e,data) => dispatch(actions.loadHolidayDetails(e,data))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps 
    )(Home);