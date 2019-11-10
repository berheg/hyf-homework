import React, {Component} from "react";
import {Link } from 'react-router-dom';


class Stars extends Component {

    render(){
        return (
            <React.Fragment>
               <div style={divStyle}>
                <li style={liStyle}>
                    <Link  to='/Overview'>Overview</Link>
                </li>  
                <li style={liStyle}>
                    <Link to='/Repository'>Repository</Link> 
                </li>
                
               <li style={liStyle}>
                <Link style={linkStyle} to='/Stars'>Stars </Link> 
                </li>
               
               <li style={liStyle}>
                <Link to='/Following'>Following</Link>
                </li> 
                 
                <li style={liStyle}>
                    <Link to='/Followers'>Followers</Link>
                </li>   
               
                </div>    
              <div className="App">  
                  <React.Fragment>
                   <h1>Stars</h1>
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
export default Stars;