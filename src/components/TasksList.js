import { useState } from "react";

const TasksList = ({ tasksList, setTasksList }) => {
  //state
  const [taskRemoved, setTaskRemoved] = useState(false);
  const [taskRemovedId, setTaskRemovedId] = useState();

  //styles
  const removedTaskStyles = {
    // transform: "translateY(500px)",
    // transition: "1.9s",
    color: "red",
  };

  const setStyles = (id) => {
    if (taskRemoved && taskRemovedId === id) return removedTaskStyles;
    else return null;
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
  const displayTasksListContent = () => {
    return tasksList.map((task) => {
      if (task.active) {
        return (
          <li key={task.id} className="task" style={() => setStyles(task.id)}>
            {task.content}
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
          </li>
        );
      } else return null;
    });
  };

  return (
    <section className="tasksList">
      <h2>LIST</h2>
      <ul className="tasksWrapper">{displayTasksListContent()}</ul>
    </section>
  );
};
export default TasksList;
