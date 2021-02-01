import React, { useState } from 'react';

import './sass/main.css';

import Header from './components/Header';
import Browser from './components/Browser';
import TasksList from './components/TasksList';
import ListHandler from './components/ListHandler';

function App() {
  const [ tasksList, setTasksList ] = useState([
    {
      id: 0,
      content: "embrace Java",
      done: false,
      active: true
    },
    {
      id: 1,
      content: "find a job in my dream industry",
      done: false,
      active: true
    },
    {
      id: 2,
      content: "win a war",
      done: false,
      active: true
    }
  ])

  return (
    <div className="App">
        <Header />
        <Browser tasksList = {tasksList} />
        <TasksList 
          tasksList = {tasksList}
          setTasksList = {setTasksList}
        />
        <ListHandler 
          tasksList = {tasksList}
          setTasksList = {setTasksList}
        />
    </div>
  );
}

export default App;
