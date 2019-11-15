import React, {Component} from "react";
import { Link } from 'react-router-dom';
import {UserConsumer} from "./context/userContext";
import {UserProvider} from './context/userContext';

class List extends Component {

  render(){
    
    return ( 
     
      <div>  
        
      <UserConsumer>
        {
          (user) => {
            return <li >
                      <UserProvider value={user}>
                        <Link to={{pathname:"/Overview", state:{user:{user}}}}>{user.login}</Link> 
                      </UserProvider>
                      
                    </li> 
          }
        }
      </UserConsumer>         
      </div>  
       
    )
       
  };
}

export default List;
