import React, {Component} from "react";
import ProfileLink from './ProfileLink';


class Followers extends Component {

    render(){
        const {user} = this.props.location.state;
        console.log(user);
        return (
            <React.Fragment>
               <ProfileLink linkStyleFollowers={linkStyle} user={user}/>
              <div> 
                  <React.Fragment>
                   <h1>Followers</h1>
                  </React.Fragment>
                              
                </div>
            </React.Fragment>
        )
    }
  
}
const linkStyle = {
    color:'#fff000'
} 

export default Followers;