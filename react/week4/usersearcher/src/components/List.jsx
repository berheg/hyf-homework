import React from "react";
import {UserConsumer} from "./context/userContext";
class List extends React.Component {

  render(){
    //const { user} = this.props.user;
  return (    
    <UserConsumer>
      {
        (user) => {
          return <li id={user}>{user.login}</li> 
        }
      }
    </UserConsumer>       
          
    )
       
  };
}

export default List;
