import React, {Component} from "react";
import ProfileLink from './ProfileLink';



class Repository extends Component {

    render(){
        const {user} = this.props.location.state;
        console.log(user);
        return (
            <React.Fragment>
               <ProfileLink linkStyleRepository={linkStyle} user={user}/>
              <div >  
                  <React.Fragment>
                   <h1>Repository</h1>
                  </React.Fragment>
                              
                </div>
                </React.Fragment>
        )
    }
  
}
const linkStyle = {
    color:'#fff000'
} 

export default Repository;