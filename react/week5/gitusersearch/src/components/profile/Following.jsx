import React, {Component} from "react";
import ProfileLink from './ProfileLink';

class Following extends Component {

    render(){
        const {user} = this.props.location.state;
        console.log(user);
        return (
            <React.Fragment>
               <ProfileLink linkStyleFollowing={linkStyle} user={user}/>  
              <div className="App">              
              
                  <React.Fragment>
                   <h1>Following</h1>
                  </React.Fragment>
                              
                </div>
            </React.Fragment>
        )
    }
  
}
const linkStyle = {
    color:'#fff000'
}

export default Following;