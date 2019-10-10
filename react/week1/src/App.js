import React from 'react';
import TaskList from '../src/Components/taskList';
import taskObject from "../src/Components/listObject";
import './App.css';

function App() {
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
