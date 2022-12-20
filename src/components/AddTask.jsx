import { useRef } from 'react'
import './AddTask.css'

const AddTask = ({ Add }) => {

    const topic = useRef()
    const description = useRef()
    const time = useRef()

    const toggleAddTask = (e) => {
        e.target.parentNode.children[1].style.display = "block"
        e.target.style.display = "none"
    }

    const CancelTaskBox = (e) => {
        e.preventDefault()
        e.target.parentNode.style.display = "none"
        e.target.parentNode.parentNode.firstChild.style.display = "block"
    }

    const handleAdd = (e) => {
        e.preventDefault()
        Add(topic.current.value, description.current.value, time.current.value)
        topic.current.value = ""
        description.current.value = ""
    }
    return (
        <div>
            <button onClick={toggleAddTask}>Add task</button>
            <form className='addTaskForm'>

                <input type="text" ref={topic} placeholder='Task name' />
                <input type="text" ref={description} placeholder='Description' />

                <button className='btn' onClick={CancelTaskBox}>Cancel</button>
                <button className='btn' onClick={handleAdd}>Add Task</button>
                <input type="datetime-local" ref={time} />

            </form>
        </div>
    )
}

export default AddTask