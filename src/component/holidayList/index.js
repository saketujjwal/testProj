import React from 'react'

const HolidayList = (props) => {
    const {
        holidayList
    } = props

    return(
        <div className='container'>
            <ul>
            {
                holidayList && holidayList.holidays && Object.keys(holidayList.holidays).map(item => {
                    return <li key={item}>
                        <a href=''>
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