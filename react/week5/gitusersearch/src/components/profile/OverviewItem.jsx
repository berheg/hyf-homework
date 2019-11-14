import React, {Component} from "react";
import ProfileLink from './ProfileLink'
import {UserConsumer} from "../context/userContext";

class OverviewItem extends Component {

    render(){
        const {user}= this.props;
        return (
            <React.Fragment>
                <ProfileLink linkStyleOverview={linkStyle} user={user} />            
                
                <div >       
                    <React.Fragment>
                        <UserConsumer>
                        {
                            (user) => {
                                return (
                                    <h1>Overview: {user.login} </h1>
                                )
                                        
                            }
                        }
                           
                        </UserConsumer>                        
                    </React.Fragment>
                                
                </div>
            </React.Fragment>
        )
    }
  
} 
const linkStyle = {
    color:'#fff000'
}

export default OverviewItem;