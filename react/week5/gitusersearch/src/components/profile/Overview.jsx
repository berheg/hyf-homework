import React, {Component} from "react";
import {BrowserRouter as Router, Route } from 'react-router-dom';
import OverviewItem from './OverviewItem';
import Repository from './Repository';
import Stars from './Stars';
import Followers from './Followers';
import Following from './Following';
import {UserProvider} from '../context/userContext';

class Overview extends Component {

    render(){
        const {user} = this.props.location.state;
        console.log(user);
        return (            
            <Router>                        
              <div className="App">
              <Route
                exact
                path= '/Overview'
                render= {(props) =>(
                  <React.Fragment>
                    <UserProvider value={user}>
                      <OverviewItem user={user} />
                    </UserProvider>                    
                  </React.Fragment>
                )}
                />
               <Route path='/Stars' component = {Stars} />
               <Route path='/Repository' component = {Repository} />
               <Route path='/Followers' component = {Followers} />
               <Route path='/Following' component = {Following} />
                </div>
            </Router>
        )
    }
  
} 

export default Overview;