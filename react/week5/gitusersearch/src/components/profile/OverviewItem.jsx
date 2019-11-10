import React, {Component} from "react";
import './profile.css'
import {Link } from 'react-router-dom';
import {UserConsumer} from "../context/userContext";

class OverviewItem extends Component {

    render(){
        //const {user}= this.props;
        return (
            <React.Fragment>
                <div style={divStyle}>
                    <li style={liStyle}>
                        <Link style={linkStyle}  to='/Overview'>Overview</Link>
                    </li>  
                    <li style={liStyle}>
                        <Link to='/Repository'>Repository</Link> 
                    </li>                    
                    <li style={liStyle}>
                        <Link to='/Stars'>Stars </Link> 
                    </li>                    
                    <li style={liStyle}>
                        <Link to='/Following'>Following</Link>
                    </li>                         
                    <li style={liStyle}>
                        <Link to='/Followers'>Followers</Link>
                    </li>                 
                </div>                 
                
                <div >       
                    <React.Fragment>
                        <UserConsumer>
                        {
                            (user) => {
                                return <h1>Overview {user} </h1>
                                        
                            }
                        }
                           
                        </UserConsumer>                        
                    </React.Fragment>
                                
                </div>
            </React.Fragment>
        )
    }
  
} 
const divStyle = {
    display:'flex',
    flexDirection:'row',
    alignItem:'Center',
    textAlign: 'center'
}
const liStyle ={
    textAlign:'center',
    width:'100px'
}
const linkStyle = {
    color:'#fff000'
}

export default OverviewItem;