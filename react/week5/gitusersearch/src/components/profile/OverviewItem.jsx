import React, {Component} from "react";
import ProfileLink from './ProfileLink'
import {UserConsumer} from "../context/userContext";

class OverviewItem extends Component {

    render(){
        //const {user}= this.props;
        return (
            <React.Fragment>
                <ProfileLink />            
                
                <div >       
                    <React.Fragment>
                        <UserConsumer>
                        {
                            (user) => {
                                return <h1>Overview {user} </h1>
                                        
                            }
                        }
                           
                        </UserConsumer>                        
                    </React.Fragment>
                                
                </div>
            </React.Fragment>
        )
    }
  
} 


export default OverviewItem;