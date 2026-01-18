import { useEffect, useState } from 'react'
import Header from './Header'
import TaskList from './TaskList'
import TaskInput from './TaskInput'
//import './App.css'

function App() {
  // Load saved tsks from local storage
  const [tasks, setTasks] = useState( () => {
    const saved = localStorage.getItem("tasks");
    return saved? JSON.parse(saved) : [];
  });

  // Save tasks
  useEffect( () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });
  
  const addTask = (text) => {
    setTasks([...tasks, text]);
  };

  // Delete a task
  const  deleteTask = (indexToDlete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDlete))
  };
  
  return (
    <>
        <Header count={tasks.length} />
        <TaskInput onAdd={addTask}  />
        <TaskList items={tasks} onDelete={deleteTask} />
    </>
  )
}

export default App
