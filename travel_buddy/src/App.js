import React, { Component } from 'react';
import Nav from './components/navbar';
import Prof from './components/profile';
import Cards from './components/cards';
import './App.css';
import Axios from "axios";






class App extends Component {

state = {
  Users:[],
  trips:[],
  reservations:[],
  companys:[],
  rates:[]
};
//getting all the data you may need
componentDidMount() {
  Axios.get('http://localhost:8001/reservation').then((response) => {
    this.setState({ reservation: response.data })
  })

  Axios.get('http://localhost:8001/rates').then((response) => {
    this.setState({ rates: response.data })
  })
};


  render() {

    return (
    <div className="App">
      {/* call the components here */}
      <Nav/>  {/* example  to call, you can pass attributes inside the calls*/}
    <Prof/>  
      <div>
      {
      this.state.Users.map(user=>{
        return <h1>{user.user_fname} {user.user_lname}</h1>
      })
      } </div>

      <Cards/>

    </div>
  );
  }
}

export default App;
