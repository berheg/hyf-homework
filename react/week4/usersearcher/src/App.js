import React from "react";
import "./App.css";
import Users from "./components/Users";


function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <h1>Github Users</h1>
      </header>
      <div className="App-body">
        <Users />
        
      </div>
    </div>
  );
}

export default App;

