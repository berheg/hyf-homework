import React, {Component} from "react";
import ProfileLink from './ProfileLink';

class Stars extends Component {

    render(){
        const {user} = this.props.location.state;
        console.log(user);
        return (
            <React.Fragment>
               <ProfileLink linkStyleStars={linkStyle} user={user}/>    
              <div className="App">  
                  <React.Fragment>
                   <h1>Stars</h1>
                  </React.Fragment>        
                </div>
            </React.Fragment>
        )
    }
  
} 
const linkStyle = {
    color:'#fff000'
}

export default Stars;