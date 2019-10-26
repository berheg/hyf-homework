import React from 'react';

class Form extends React.Component {
    
    render(){
        const {id}= this.props;        
        return(
            <form onSubmit = {this.props.addTodo.bind(this, id)}>
                <div>
                    <label>Todo description</label>
                    <input type='text' name = 'description'  onChange = {this.props.handleDescriptionChange} />
                </div>
                <div>
                    <label>deadline</label>
                    <input type='date' name = 'deadline'  onChange = {this.props.handleDeadlineChange}/>
                </div>
            </form>
        )
    }    
} 

export default Form;