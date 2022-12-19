import { useState } from 'react'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = () => {
  const [tasks, setTask] = useState([])



  const handleDelete = (id) => {
    setTask(tasks.filter(task => task.id !== id))
  }

  const handleAdd = (t, d, dt) => {
    const data = {}
    data.topic = t
    data.description = d
    data.isDone = false
    data.time = dt
    data.id = Math.random(Date.now()) * 10000000
    setTask([...tasks, data])
  }

  const handleEdit = (id) => {
    const old = tasks.find(task => task.id === id)
    const topic = prompt("Enter new topic", old.topic)
    const des = prompt("Enter new description", old.description)
    if (topic !== "" && des !== "") {
      setTask(tasks.map(task => task.id === id ? { topic: topic, description: des, isDone: false, id: task.id, time: task.time } : task))
    }

    if (topic === null && des === null) {
      setTask(tasks.map(task => task.id === id ? { topic: old.topic, description: old.description, isDone: false, id: task.id, time: task.time } : task))
    }
    else if (topic === null) {
      setTask(tasks.map(task => task.id === id ? { topic: old.topic, description: des, isDone: false, id: task.id, time: task.time } : task))

    }
    else if (des === null) {
      setTask(tasks.map(task => task.id === id ? { topic: topic, description: old.description, isDone: false, id: task.id, time: task.time } : task))

    }


  }

  return (
    <div>
      {tasks.map((task, index) => <Tasks key={index} datetime={task.time} topic={task.topic} description={task.description} isDone={task.isDone} id={task.id} Delete={handleDelete} Edit={handleEdit} />)}
      <AddTask Add={handleAdd} />
    </div>
  )
}

export default App