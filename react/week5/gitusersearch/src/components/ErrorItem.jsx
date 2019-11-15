import React from "react";
import {UserConsumer} from "./context/userContext";
export default class ErrorItem extends React.Component {
    render(){
        return(
            <UserConsumer>
                {
                    (error) =>{
                       return <li>Error: {error}</li>;
                    }
                }
            </UserConsumer>
        ) 
    }
  
}
