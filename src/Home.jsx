import { useState, useEffect } from 'react'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useKeycloak } from '@react-keycloak/web'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const {keycloak} = useKeycloak();
    const [tasks, setTask] = useState([])
console.log(keycloak.hasRealmRole("user"))
    // userRole(keycloak.tokenParsed.realm_access.roles[0])
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
  
    // useEffect(() => {retrieveAllTasks()},[])
    useEffect(() => { retrieveAllTasks()
      setInterval(()=>retrieveAllTasks(),10000)},[])
  
    
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
      console.log(dt)
      const data = {}
      data.username=keycloak.tokenParsed.preferred_username
      data.id = keycloak.tokenParsed.sub
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
 
    // console.log(keycloak.tokenParsed.realm_access.roles[0])
  const navigate = useNavigate();

    const Login = () =>{
          navigate("/")
          keycloak.logout()
    }  
    return (
        <div>
        {tasks.map((task, index) => <Tasks taskId={task._id} key={task._id} datetime={task.dateCreated} topic={task.topic} description={task.description}  id={task.id} Delete={handleDelete} Edit={handleEdit} />)}
        <AddTask Add={handleAdd} />
        {!!keycloak.authenticated && (
          <button
            type="button"
            className="text-blue-800"
            onClick={() => Login()}
          >
            Logout ({keycloak.tokenParsed.preferred_username})
          </button>
        )}
        
      </div>
      
     
     
    )
}

export default Home