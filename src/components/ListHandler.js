import { useState } from "react";

const ListHandler = ({ tasksList, setTasksList }) => {
  const [newTask, setNewTask] = useState({
    id: tasksList.length,
    content: "",
    done: false,
    active: true,
  });

  const inputHandler = (e) => {
    setNewTask((prevState) => ({
      ...prevState,
      content: e.target.value,
    }));
  };

  const buttonHandler = () => {
    setTasksList((prevState) => [...prevState, newTask]);
  };

  return (
    <section className="listHandler">
      <form className="form">
        <input
          className="form__input"
          onChange={(e) => inputHandler(e)}
        ></input>
        <button className="form__button" onClick={buttonHandler}>
          Add Task
        </button>
      </form>
    </section>
  );
};
export default ListHandler;
