import React from "react";
import "./App.css";
import Users from "./components/Users";
import {BrowserRouter as Router, Route } from 'react-router-dom';
import About from "./components/pages/About";
import Header from "./components/layout/Header";
import Overview from "./components/profile/Overview";

function App() {
  return (
    <Router>
      <div className="App">  
      <Header />
      <Route
        exact
        path= '/githubSearch'
        render= {(props) =>(
          <React.Fragment>
            <Users />
          </React.Fragment>
        )}
        />
        <Route path='/About' component = {About} />
        <Route path='/Overview' component = {Overview} />
        </div>
    </Router>   
    
  );
}

export default App;

