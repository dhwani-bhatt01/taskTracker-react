import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 5th at 2:30pm',
        reminder: true, 
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 4,
        text: 'Studying',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
])

//Add Task
const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
}

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div>
      <Header /> 
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? ( <Tasks tasks = {tasks} onDelete = {deleteTask}/>) : ('No Tasks To Show')
       }
    </div>
  )
}


export default App
