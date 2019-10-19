import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todo';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

import './App.css';
//App component class
class App extends Component {
	state = {
		todos: [],
    counter:0,
    text: "No Item"
	};
  //excuted when the component is mounted
	componentDidMount() {
		setInterval(() => {
      this.setState({counter: this.state.counter+1})
    }, 1000);
	}

	// Toggle Complete
	markComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	};
  // Delete Todo
  delTodo = (id) => {  
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)]
        })
        if(this.state.todos.length ===1)
          this.setState({text: 'No Item'}); 
        console.log(this.state.todos);   
  };

  // Add Todo
  addTodo = () => {
    const taskObject = [{ id: 1, description : "Get out of bed" },
                        { id: 2, description : "Brush teeth" },
                        { id: 3, description : "Eat breakfast" }]; 
      //const randomIndex = Math.floor(Math.random() * Math.floor(3));    
      let todosLength=this.state.todos.length;
      let flag = false;
      while((todosLength < taskObject.length ) && !flag){       
        const  newTodo = taskObject[todosLength];
        if(this.state.todos.includes(newTodo)) 
          todosLength += 1;
        else{
          this.setState({ todos: this.state.todos.concat(newTodo) }); 
          flag = true;
        }          
      }; 
      if(this.state.todos)
        this.setState({text: ''});   
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <div className='container'>
            <Header />
            <Route
              exact
              path='/'
              render={(props) => (
                <React.Fragment>
                  <h1>Tasks Todo</h1>
                  <h1>You have used {this.state.counter} seconds on this website</h1>
                  <div className="todoForm">
                    <AddTodo todos={this.state.todos} addTodo={this.addTodo} text={this.state.text}/>
                    <Todos
                      todos={this.state.todos}
                      markComplete={this.markComplete}
                      delTodo={this.delTodo}
                    />
                  </div>
                </React.Fragment>
              )}
            />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;