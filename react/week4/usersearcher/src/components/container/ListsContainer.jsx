import React, { Component } from 'react';
import List from '../List';

class ListContainer extends Component{
    render(){        
        return this.props.userName.map((user) =>(                         
                <List user={user}/>
        )
        )
    }
}
 export default ListContainer