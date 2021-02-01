import React, { useState } from 'react';

const Browser = ({tasksList, setTasksList}) => {
    const [ searchedTask, setSearchedTask ] = useState("");
    
    const inputHandler = (e) => {
        setSearchedTask(e.target.value);
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        tasksList.map(task => {
            if(task.content === searchedTask)
                return console.log("yes");
            else 
                return console.log("no");
        })
    }

    return(
        <section className="browser">
            <h2 className="browser__title">Browser</h2>
            <form className="form">
                <input className="form__input" type="text" onChange={(e) => inputHandler(e)}></input>
                <button className="form__button" type="submit" onClick={(e) => submitHandler(e)}>Search</button>
            </form>
        </section>
    )
}

export default Browser;