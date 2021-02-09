import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TasksList = ({ tasksList, setTasksList }) => {
  //state
  const [taskRemoved, setTaskRemoved] = useState(false);
  const [taskRemovedId, setTaskRemovedId] = useState();

  //styles for removed task
  const removedTaskStyles = {
    transform: "translateX(500px)",
    transition: "1.9s",
    color: "red",
  };

  const setStyles = (id) => {
    if (taskRemoved && taskRemovedId === id) return removedTaskStyles;
  };

  //remove/done tasks
  const removeTask = (id) => {
    setTaskRemoved(true);
    setTaskRemovedId(id);
    setTimeout(
      () =>
        setTasksList(
          tasksList.map((task) => {
            if (task.id === id) task.active = false;
            return task;
          })
        ),
      2000
    );

    notify();
  };

  const taskDone = (id) => {
    setTasksList(
      tasksList.map((task) => {
        if (task.id === id) task.done = true;
        return task;
      })
    );
  };

  //display tasks
  const displayTasks = (option) => {
    return tasksList.map((task) => {
      if (task.active) {
        return (
          <li
            key={task.id}
            className="task"
            id={task.id}
            style={setStyles(task.id)}
          >
            {task.content}

            {option === "all" && (
              <>
                <button
                  className="task__button task__button--done"
                  onClick={() => taskDone(task.id)}
                >
                  D
                </button>
                <button
                  className="task__button task__button--remove"
                  onClick={() => removeTask(task.id)}
                >
                  X
                </button>
              </>
            )}
          </li>
        );
      } else return null;
    });
  };
  // window.addEventListener("DOMContentLoaded", () => {
  //   //use button "Show only completed tasks" from ListHandler. I hope I will oslve it better using Redux
  //   const button = document.querySelector(".doneTasks");
  //   button.setAttribute("onclick", "displayTasks(done)");
  // });

  //react-toastify needs it
  toast.configure();

  const notify = () => {
    toast("You have removed task! ");
  };

  return (
    <section className="tasksList">
      <h2>LIST</h2>
      <ul className="tasksWrapper">{displayTasks("all")}</ul>
    </section>
  );
};
export default TasksList;
