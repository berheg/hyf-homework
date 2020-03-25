import React, { Component } from 'react';
import List from '../List';
import {UserProvider} from '../context/userContext';
import {UserConsumer} from '../context/userContext';

class ListContainer extends Component{
    render(){  
        const {users} = this.props     
        return (    
            /*<UserConsumer>
              {
                (users) => {*/
                    users.map(user => (
                        <div key ={user.id}>
                          <UserProvider value= {user}>
                            <List key = {user.id} user={user} />
                          </UserProvider>
                        </div>
                        
                      ))
               /* }
              }
            </UserConsumer> */
        )
    }
}
 export default ListContainer