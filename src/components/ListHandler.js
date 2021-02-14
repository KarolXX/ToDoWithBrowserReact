import { useState } from 'react';
import {Link} from 'react-scroll';

const ListHandler = ({ tasksList, setTasksList, setShowCompleted }) => {
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
      <button className="doneTasks" onClick={() => setShowCompleted(true)}>
        Show only completed tasks
      </button>
      <Link className="buttonHistory" to="history" smooth={true} duration={1000}>History</Link>
    </section>
  );
};
export default ListHandler;
