import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component { 

  render() {
    const {id, text} = this.props;    
     console.log(text);
    return (
      <div className="addDiv" style={addDivStyle}>        
        <button onClick={this.props.addTodo.bind(this, id)} style={btnStyle}>Add Todo</button>
        <p/>{''} {text}       
      </div>
    )
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}
const addDivStyle ={
  display: 'flex', 
  alignSelf: 'center'
}
const btnStyle = {
  background: '#008000',
  color: '#fff',
  border: 'none',
  padding: '10px 15px',
  borderRadius: '70%',
  cursor: 'pointer',
  fontSize: '20px' 
}

export default AddTodo;
