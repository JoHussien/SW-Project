import React, { Component } from 'react';
import Login from './components/login';
// import Nav from './components/navbar';
// import Prof from './components/profile';
// import Cards from './components/cards';
import './App.css';
import Axios from "axios";






class App extends Component {

state = {
  auth:false,
  loginflag:false,

  User_data:[],
  trips:[],
  reservations:[],
  companys:[],
  rates:[]
};

logintoggle =()=>{
  this.setState({loginflag:true})
  console.log(this.state.loginflag)
}
getAccount =(mail, pass)=>{

  Axios.get('http://localhost:8001/myaccount/'+mail).then((response) => {
    this.setState({ User_data: response.data })

    let passw=(response.data)[0].pass ;
    console.log(this.state.User_data)

    if(pass===passw){
      this.setState({ auth: true})
      this.logintoggle()
    }
    else {
      alert(pass +"="+passw )
      
    }
    
  })
  

}


  render() {

    return (
    <div className="App">

      {!this.state.loginflag&&<Login
      logintoggle={this.logintoggle}
      getAccount={this.getAccount}
      auth={this.state.auth}
      loginflag={this.state.loginflagauth}
        />}
      {this.state.loginflag&&this.state.auth&&
      <div>
          <div>comp_name={this.state.User_data[0].comp_name} </div>
          <div> representative_fame={this.state.User_data[0].representative_fame}</div>
      
        </div>
      }
       {
       this.state.loginflag&&!this.state.auth&&
      <div>
          <div>Please Login in </div>
          <Login
      logintoggle={this.logintoggle}
      getAccount={this.getAccount}
      auth={this.state.auth}
      loginflag={this.state.loginflag}
      />
        </div>
     

      }
    

    </div>
  );
  }
}

export default App;
