import React, { Component } from "react";
import * as API from "../api";
import Loading from "./Loading";
import NoItem from "./NoItem";
import Card from "./Card";
import Input from "./Input";
//import List from "./List";
import Head from "./Head";
import ErrorItem from "./ErrorItem";
import ListsContainer from './container/ListsContainer';
import {UserProvider} from './context/userContext';

export default class Users extends Component {
  state = {
    users: [],
    isLoading: false,
    inputValue: '',
    noItem: false,
    error: false,
    errorValue: []
    
  };  
  
  handleInputChange = async (e) =>{
    this.setState({inputValue: e.target.value});
    //check if input is given
    if(this.state.inputValue!=='') {
      console.log(this.state.inputValue);    
      
      this.setState({noItem: false});
      this.setState({isLoading: true});  
      
      const inputValue = this.state.inputValue;  
      
      const users = await API.getUser(inputValue);
      setTimeout(() => {
        //if response is not error because it does not response status properties
        if(users.message=== undefined)
      {
        this.setState({ users:users.items, isLoading: false, error: false });        
              
        if(this.state.users.length ===0){         
            this.setState({noItem: true})
        } 
      }
      else{
        this.setState({errorValue: users.message, isLoading: false, error: true, users:[]});
      }          
    
      }, 500);
      
    }  
  }

  
  render() {
    const {isLoading, noItem, errorValue, error, users} = this.state;
    return (      
      <Card>
        <React.Fragment>
          <Head />
          
          <Input handleInputChange={this.handleInputChange} placeholder={'Search For User'}/>
          {isLoading ? <Loading />:null}
          {noItem && <NoItem />}

          <UserProvider value={errorValue}>
            {error  && <ErrorItem errorValue={errorValue}/>}
          </UserProvider>
          
          <UserProvider value= {users} >
            { users.length ? 
                          
                <ListsContainer users={users} />
              
              :null        
            }  
          </UserProvider>      
        </React.Fragment>
      </Card>      
    );
  }
}
