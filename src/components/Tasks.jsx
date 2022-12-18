import React from 'react'
import './Tasks.css'
const Tasks = ({ topic, datetime, description, isDone, id, Delete, Edit }) => {

    const handleDelete = () => {
        Delete(id)
    }

    const handleEdit = () => {
        Edit(id)
    }

    let today = new Date();
    let currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    return (
        <div className='TasksContainer'>
            <div className='TextContainer'>
                <div>
                    <input type="radio" onClick={handleDelete} />
                </div>
                <div>
                    <p>{topic}</p>
                    <p>{description}</p>
                    <p className={datetime < currentDate ? 'textRed' : 'textBlue'}>{datetime}</p>
                </div>

            </div>

            <div className='edit'>
                <button onClick={handleEdit}>Edit</button>
            </div>
        </div>
    )
}

export default Tasks