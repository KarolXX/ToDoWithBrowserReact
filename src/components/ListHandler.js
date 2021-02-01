import { useState } from 'react';

const ListHandler = ({tasksList, setTasksList}) => {
    const [newTask, setNewTask] = useState({
        id: tasksList.length,
        content: "win a war",
        done: false,
        active: true
    });

    const inputHandler = e => {
        setNewTask(prevState =>({
            ...prevState,
            content: e.target.value
        }) )
        //console.log(newTask);
    }

    console.log(newTask);
    
    return (
        <section className="listHandler">
            <form className="form">
                <input className="form__input" onChange = {(e) => inputHandler(e)}></input>
                <button className="form__button">Add Task</button> 
            </form>
        </section>
    )  
}
export default ListHandler;