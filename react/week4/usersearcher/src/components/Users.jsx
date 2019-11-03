import React, { Component } from "react";
import * as API from "../api";
import Loading from "./Loading";
import NoItem from "./NoItem";
import Card from "./Card";
import Input from "./Input";
import Head from "./Head";
import ErrorItem from "./ErrorItem";
import {UserProvider} from './context/userContext';

export default class Users extends Component {
  state = {
    users: [],
    isLoading: false,
    inputValue: '',
    noItem: false,
    error: false,
    errorValue: [],
    usersLength: false
  };  
  
  handleInputChange = async (e) =>{
    this.setState({inputValue: e.target.value});
    if(this.state.inputValue!=='') {      
      this.setState({noItem: false, isLoading: true});      
      const inputValue = this.state.inputValue;        
      const users = await API.getUser(inputValue);
      if(users.message=== undefined)
      {
        this.setState({ users:users.items, isLoading: false, error: false });        
        this.setState({users: this.state.users.filter(user =>String(user.login).startsWith(this.state.inputValue)) });       
        if(this.state.users.length){
          this.setState({usersLength: this.state.users.length})
        }          
        else{
            this.setState({noItem: true})
        } 
      }
      else{
        this.setState({errorValue: users.message, isLoading: false, error: true});
      }           
    }  
  }
  render() {
    return (
      <Card>
        <Head />
        <Input handleInputChange={this.handleInputChange} placeholder={'Search For User'}/>
        {this.state.isLoading && <Loading />}
        {this.state.noItem && <NoItem />}
        <UserProvider value={this.state.errorValue}>
          {this.state.error  && <ErrorItem errorValue={this.state.errorValue}/>}
        </UserProvider>
         
        <UserProvider value= {this.state.users}>
        {this.state.usersLength && this.state.users.map(user => (
            <li key={user.id}>{user.login}</li>
            ))}
        </UserProvider>
      </Card>
    );
  }
}

