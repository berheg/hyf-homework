import React, {Component} from "react";
import ProfileLink from './ProfileLink';


class Followers extends Component {

    render(){
        return (
            <React.Fragment>
               <ProfileLink />
              <div> 
                  <React.Fragment>
                   <h1>Followers</h1>
                  </React.Fragment>
                              
                </div>
            </React.Fragment>
        )
    }
  
} 

export default Followers;