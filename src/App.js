import React, { useState } from "react";

import "./sass/main.css";

import Header from "./components/Header";
import Browser from "./components/Browser";
import TasksList from "./components/TasksList";
import ListHandler from "./components/ListHandler";

function App() {
  //set default date for initial tasks
  let defaultDate = new Date().toTimeString();
  defaultDate = defaultDate.split(" ")[0];

  const [tasksList, setTasksList] = useState([
    {
      id: 0,
      content: "embrace Java",
      done: false,
      active: true,
      date: defaultDate,
    },
    {
      id: 1,
      content: "find a job in my dream industry",
      done: false,
      active: true,
      date: defaultDate,
    },
    {
      id: 2,
      content: "win a war",
      done: false,
      active: true,
      date: defaultDate,
    },
  ]);
  //state used for displaying all/completed tasks
  const [showCompleted, setShowCompleted] = useState(false);

  //filter tasksList if you want only completed tasks to be displayed
  const tasksToDisplay = showCompleted
    ? tasksList.filter((task) => task.done)
    : tasksList;

  return (
    <div className="App">
      <Header />
      <Browser tasksList={tasksToDisplay} />
      <TasksList tasksList={tasksToDisplay} setTasksList={setTasksList} />
      <ListHandler
        tasksList={tasksList}
        setTasksList={setTasksList}
        setShowCompleted={setShowCompleted}
      />
    </div>
  );
}

export default App;
