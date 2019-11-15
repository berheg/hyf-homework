import React, {Component} from "react";
import {Link } from 'react-router-dom';

class ProfileLink extends Component {

    render(){
        const {linkStyleOverview, linkStyleStars, linkStyleRepository, linkStyleFollowers, linkStyleFollowing, user} = this.props;
        return (
            <React.Fragment>
                <div style={divStyle}>
                    <li style={liStyle}>
                        <Link style={linkStyleOverview}  to={{pathname:'/Overview', state:{user:{user}}}}>Overview</Link>
                    </li>  
                    <li style={liStyle}>
                        <Link style={linkStyleRepository} to={{pathname:'/Repository', state:{user:{user}}}}>Repository</Link> 
                    </li>                    
                    <li style={liStyle}>
                        <Link style={linkStyleStars} to={{pathname:'/Stars', state:{user:{user}}}}>Stars </Link> 
                    </li>                    
                    <li style={liStyle}>
                        <Link style={linkStyleFollowing} to={{pathname:'/Following', state:{user:{user}}}}>Following</Link>
                    </li>                         
                    <li style={liStyle}>
                        <Link style={linkStyleFollowers} to={{pathname:'/Followers', state:{user:{user}}}}>Followers</Link>
                    </li>                 
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


export default ProfileLink;