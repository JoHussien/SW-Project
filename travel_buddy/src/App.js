import React, { Component } from 'react';
import Nav from './components/navbar';
import Prof from './components/profile';
import Cards from './components/cards';
import './App.css';
import Axios from "axios";






class App extends Component {

state = {
  Users:[]
};

componentDidMount() {
  Axios.get('http://localhost:8001/users').then((response) => {
    this.setState({ Users: response.data })
   
    console.log(this.state.Users)

  })
};


  render() {

    return (
    <div className="App">
      {/* call the components here */}
      {/* <Nav/>   {/* example  to call, you can pass attributes inside the calls*/}
      {/* <Prof/> */} 
      {
      this.state.Users.map(user=>{
        return <h1>{user.user_fname} {user.user_lname}</h1>
      })
      } 
      {/* <Cards/> */}

    </div>
  );
  }
}

export default App;
