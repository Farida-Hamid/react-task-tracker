import { useState } from 'react'
import Header from './Header'
import TaskList from './TaskList'
import TaskInput from './Task Input'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  
  const addTask = (newText) => {
    setTasks([...tasks, newText])
  }

  return (
    <main>
        <Header count={tasks.length} />
        <TaskInput onAdd={addTask} />
        <TaskList item={tasks} />
    </main>
  )
}

export default App
