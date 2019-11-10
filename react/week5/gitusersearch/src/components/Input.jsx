import React,{Component} from 'react';

class Input extends Component {
  
  
  render(){
    
  return (
    <form style={divStyle}>  
     
      <input type='text' name = 'userLogin' style={inputStyle} 
        onKeyUp = {this.props.handleInputChange} 
        placeholder={"Search for user"}
      />  
    </form>
  );
};
};
const inputStyle = {
  boxShadow: '0 0 0 5px orange',
  alignSelf: 'center'

}
const divStyle = {  
  alignSelf: 'center',
  textAlign: 'center',  

}
export default Input;
