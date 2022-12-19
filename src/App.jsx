import { useState } from 'react'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = () => {
  const [tasks, setTask] = useState([])

  const retrieveAllTasks = () => {
    fetch(`http://127.0.0.1:8000`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((data) => setTask(data))
  }

  retrieveAllTasks()

  const handleDelete = (id) => {
    setTask(tasks.filter(task => task.id !== id))
    fetch(`http://127.0.0.1:8000/${id}`,{
    method: 'DELETE',
    headers:{
        'Content-Type':'application/json'
    }
})
.then(response=>response.json())
.then((data)=>{
    console.log("successfully deleted")
})
  }

  const handleAdd = (t, d, dt) => {
    const data = {}
    data.username="Lin Pyae"
    data.id = Math.random(Date.now()) * 10000000
    data.topic = t
    data.description = d
    data.dateCreated = dt
    console.log(typeof data.time)
    setTask([...tasks, data])
    fetch('http://127.0.0.1:8000',{
      method:'POST',
      body: JSON.stringify({
        username: data.username,
        userid: data.id.toString(),
        topic: data.topic,
        description: data.description,
        dateCreated:data.dateCreated
      }),
      headers:{
        'Content-Type' : 'application/json'
      }
    })
    .then(response=>response.json())
    .then(data => console.log("successfully added"))
    
  }

  const handleEdit = (id) => {
    const old = tasks.find(task => task._id === id)
    const t = prompt("Enter new topic",old.topic)
    const d = prompt("Enter new description",old.description)
    // if (topic !== "" && des !== "") {
    //   setTask(tasks.map(task => task.id === id ? { topic: topic, description: des, id: task.id, time: task.time } : task))
    // }

    // if (topic === null && des === null) {
    //   setTask(tasks.map(task => task.id === id ? { topic: old.topic, description: old.description, id: task.id, time: task.time } : task))
    // }
    // else if (topic === null) {
    //   setTask(tasks.map(task => task.id === id ? { topic: old.topic, description: des, id: task.id, time: task.time } : task))

    // }
    // else if (des === null) {
    //   setTask(tasks.map(task => task.id === id ? { topic: topic, description: old.description, id: task.id, time: task.time } : task))

    // }

    console.log(old.userid)

    fetch(`http://127.0.0.1:8000/${id}`,{
        method: 'PUT',
        body: JSON.stringify({
          username: old.username,
          userid: old.userid,
          topic: t,
          description: d,
          dateCreated:old.dateCreated
        }),
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(response=>response.json())
    .then((data)=>console.log("successfully posted"))
  }

  return (
    <div>
      {tasks.map((task, index) => <Tasks taskId={task._id} key={task._id} datetime={task.dateCreated} topic={task.topic} description={task.description}  id={task.id} Delete={handleDelete} Edit={handleEdit} />)}
      <AddTask Add={handleAdd} />
    </div>
  )
}

export default App