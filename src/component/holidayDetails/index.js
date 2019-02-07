import React from 'react';

const HolidayDetails = (props)=> {
    const {
        holidays
    } = props;
    return(
        <table className='border'>
        <thead>
            <tr>
                <th>Holiday</th>
                <th>Date</th>
                <th>Observed On</th>
                <th>Public</th>
            </tr>
        </thead>
        <tbody>
            {holidays.map(item => {
                return (
                    <tr key={item.name}>
                        <td>{item.name}</td>
                        <td>{item.date}</td>
                        <td>{item.observed}</td>
                        <td>{item.public ? 'true' : 'false'}</td>
                    </tr>
                )
            })
            }
        </tbody>
        </table>
    )

}

export default HolidayDetails;