import React from 'react'

const HolidayList = (props) => {
    const {
        holidayList,
        loadHolidayDetails,
        history
    } = props

    return(
        <div className='container'>
            <ul>
            {
                holidayList && holidayList.holidays && Object.keys(holidayList.holidays).map(item => {
                    return <li key={item}>
                        <a href="javascript:void(0);" onClick={e => loadHolidayDetails(history,e)}>
                            {item}
                        </a>
                    </li>
                })
            }
            </ul>
        </div>
    )
}
export default HolidayList