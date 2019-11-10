import React, {Component} from "react";
import { Link } from 'react-router-dom';
import {UserConsumer} from "./context/userContext";

class List extends Component {

  render(){
    
    return ( 
     
      <div>  
        
      <UserConsumer>
        {
          (user) => {
            return <li >
            
                      <Link to="/Overview" user={user}>{user.login}</Link> 
                    </li> 
          }
        }
      </UserConsumer>         
      </div>  
       
    )
       
  };
}

export default List;
