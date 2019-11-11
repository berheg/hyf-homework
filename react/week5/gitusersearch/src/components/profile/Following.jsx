import React, {Component} from "react";
import ProfileLink from './ProfileLink';

class Following extends Component {

    render(){
        return (
            <React.Fragment>
               <ProfileLink />  
              <div className="App">              
              
                  <React.Fragment>
                   <h1>Following</h1>
                  </React.Fragment>
                              
                </div>
            </React.Fragment>
        )
    }
  
}


export default Following;