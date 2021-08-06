import './InputCheckbox.css'
const InputCheckbox = (props) => {

    const updateTaskWithAPI = async (id, checkedOrNot) => {

        const rawResponse = await fetch('http://127.0.0.1:3000/tasks/' + id, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({completed: checkedOrNot})
        });
        const response = await rawResponse.json()
        if (response.success) {
            props.getTasks()
        }
    };

    return (<input title={props.title} className='checkbox' type='checkbox' checked={props.completed || false} onChange={(e) => {updateTaskWithAPI(props.value, e.target.checked )}}/>)

    // if (props.completed === true) {
    //     return (<input type='checkbox' checked onChange={(e) => {updateTaskWithAPI(props.value, e.target.checked )}}/>)
    // } else {
    //     return (<input type='checkbox'  onChange={(e) => {updateTaskWithAPI(props.value,  e.target.checked)}} />)
    // }
}

export default InputCheckbox;


