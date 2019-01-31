import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import Paper from '@material-ui/core/Paper'

import * as actions from '../actions/homeActions'
import HolidayList from '../component/holidayList'

class Home extends Component {
    componentDidMount(){
        this.props.loadInitialData(true)
    }
    render() {
        const {
            isLoadedBool,
            holidayList
        } = this.props;
        return(
            <Paper className='layout'> 
                HOME PAGE
                <div>
                    {/* <a target='_blank' href='https://holidayapi.com/v1/holidays?key=de5b998b-8778-4439-ab33-42d0bcbb214b&country=US&year=2015'>
                        API Response
                    </a> */}
                    <HolidayList holidayList = {holidayList}/>
                </div>


            </Paper>
        )
    }
}   `1q`

function mapStateToProps(state) {
    return {
        isLoadedBool:state.isLoaded,
        holidayList:state.home.data
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadInitialData: data => dispatch(actions.loadInit(data))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps 
    )(Home);