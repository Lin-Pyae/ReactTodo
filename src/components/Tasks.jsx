import React from 'react'
import './Tasks.css'
const Tasks = ({ topic, datetime, description, isDone, id, Delete, Edit }) => {
    let d = new Date(datetime)
    const currentD = () => {
        const date = new Date();
        console.log("Current time", date.getTime(), " target time", d.getTime())
        return date.getTime()
    }
    setInterval(currentD, 1000)
    console.log(d.getTime())

    const handleDelete = () => {
        Delete(id)
    }

    const handleEdit = () => {
        Edit(id)
    }


    return (
        <div className='TasksContainer'>
            <div className='TextContainer'>
                <div>
                    <input type="radio" onClick={handleDelete} />
                </div>
                <div>
                    <p>{topic}</p>
                    <p>{description}</p>
                    <p className={currentD() > d.getTime() ? 'textRed' : 'textBlue'}>{datetime}</p>
                </div>

            </div>

            <div className='edit'>
                <button onClick={handleEdit}>Edit</button>
            </div>
        </div>
    )
}

export default Tasks