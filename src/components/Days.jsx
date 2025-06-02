import days from '../data/days.js';

export function Days(){
    return (
        <>
            {days.map(day => {
                return (
                    <a className='flex' key={day}>{day}</a>
                )
            })}
        </>
    )
}