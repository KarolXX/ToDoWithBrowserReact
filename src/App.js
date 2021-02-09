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

  return (
    <div className="App">
      <Header />
      <Browser tasksList={tasksList} />
      <TasksList tasksList={tasksList} setTasksList={setTasksList} />
      <ListHandler tasksList={tasksList} setTasksList={setTasksList} />
    </div>
  );
}

export default App;
