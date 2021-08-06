import './App.css';
import TasksList from "./Componenets/TasksList";
import NewTask from "./Componenets/NewTask";
import {useEffect, useState} from "react";


function App() {
    const [tasks, setTasks] = useState([])

    const getTasks = async () => {
        let response = await fetch ('http://127.0.0.1:3000/tasks')
        let tasks = await response.json()
        setTasks(tasks)
    }

    useEffect(() => {
        if (tasks.length === 0) {
            getTasks()
        }
    })

  return (
    <div className="App">

      <TasksList tasks = {tasks} getTasks = {getTasks} />
      <NewTask getTasks = {getTasks} />
    </div>
  );
}

export default App;





