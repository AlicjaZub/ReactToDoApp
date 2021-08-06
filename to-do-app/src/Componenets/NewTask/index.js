import Input from "../Input";
import Button from "../Button";
import {useState} from "react";
import './NewTask.css'


const NewTask = (props) => {

    const [input, setInput] = useState('')
    const sendTaskToAPI = async (e) => {
        const rawResponse = await fetch('http://127.0.0.1:3000/tasks', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({task:input, completed:false})
        });
        const response = await rawResponse.json()
        if (response.success) {
            props.getTasks()
            e.target.previousElementSibling.value = ''
        }
    };

    return (
        <div>
            <Input class='newTask' blur = {(e) => {setInput(e.target.value)}}/>
            <Button title = 'Create new task' class='newTaskButton' buttonValue = 'Add task!' click = {sendTaskToAPI}/>
        </div>
    )
}

export default NewTask;

