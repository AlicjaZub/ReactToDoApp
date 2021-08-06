import InputCheckbox from "../InputCheckbox";
import './TasksList.css'
import Button from "../Button";

const TaskList = (props) => {

    const deleteTask = async (id) => {
        const rawResponse = await fetch('http://127.0.0.1:3000/tasks/' + id, {
            method: 'DELETE',
        });
        const response = await rawResponse.json()
        if (response.success) {
            props.getTasks()
        }
    };

    return (
        <ul>
            <h1>TO DO LIST:</h1>
            {props.tasks.map((task, index) => {
                return (
                    <li key={index}>
                        <InputCheckbox title = 'Mark a task as completed' getTasks = {props.getTasks} completed = {task.completed} value = {task._id} />
                        {task.task} <Button title = 'Delete a task' class = 'deleteButton' buttonValue = 'x' click = {() => {deleteTask(task._id)}}  />
                    </li>
                );
            })}
        </ul>
    )
}

export default TaskList;