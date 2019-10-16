import React from 'react';
import TaskList from '../src/Components/taskList';
//import taskObject from "../src/Components/listObject";
import './App.css';

function App() {
  const taskObject =[
    {
        description : "Get out of bed",
        deadline : "Wed Sep 13 2017"
    },
    {
        description : "Brush teeth",
        deadline : "Thu Sep 14 2017"
    },
    {
        description : "Eat breakfast",
        deadline : "Fri Sep 15 2017"
    }
] 
  return (
    <div className="App">
      <header className="App-header">        
        <h2> REACT APP </h2>
      </header>
      <div>
        <h3>Tasks Todo</h3>
        <TaskList taskObject={taskObject} />
      </div>
    </div>
  );
}

export default App;
