import React, {Component} from "react";
import ProfileLink from './ProfileLink';


class Stars extends Component {

    render(){
        return (
            <React.Fragment>
               <ProfileLink />    
              <div className="App">  
                  <React.Fragment>
                   <h1>Stars</h1>
                  </React.Fragment>        
                </div>
            </React.Fragment>
        )
    }
  
} 

export default Stars;