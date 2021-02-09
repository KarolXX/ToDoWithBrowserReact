import { useState } from "react";

const ListHandler = ({ tasksList, setTasksList }) => {
  const [newTask, setNewTask] = useState({
    id: tasksList.length,
    content: "",
    done: false,
    active: true,
    date: null,
  });

  const inputHandler = (e) => {
    setNewTask((prevState) => ({
      ...prevState,
      content: e.target.value,
    }));
  };

  const addHandler = (e) => {
    e.preventDefault();
    const newDate = new Date().toTimeString().split(" ")[0];
    setTasksList((prevState) => [...prevState, { ...newTask, date: newDate }]);
  };

  const displayTasks = (option) => {
    const tasksWrapper = document.querySelector(".tasksWrapper");
    tasksWrapper.innerHTML = tasksList.map((task) => {
      if (task.active) {
        return (
          <li
            key={task.id}
            className="task"
            id={task.id}
            // style={setStyles(task.id)}
          >
            {/* {task.content} */}
          </li>
        );
      } else return null;
    });
  };

  return (
    <section className="listHandler">
      <form className="form">
        <input
          className="form__input"
          onChange={(e) => inputHandler(e)}
        ></input>
        <button className="form__button" onClick={(e) => addHandler(e)}>
          Add Task
        </button>
      </form>
      {/*this button is used in TaskList to avoid duplicating 
      the very similar function "displayTasks" 
      I hope i will solve it easier with Redux */}
      <button className="doneTasks" onClick={() => displayTasks("done")}>
        Show only completed tasks
      </button>
      <button className="history">History</button>
    </section>
  );
};
export default ListHandler;
