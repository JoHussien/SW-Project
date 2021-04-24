import React, { Component } from 'react';
import Login from './components/login';
import Hompage from './components/U_homepage'

// import Prof from './components/profile';
// import Cards from './components/cards';
import './App.css';
import Axios from "axios";






class App extends Component {

state = {
  auth:false,
  loginflag:false,
  company:-1,

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
handlecompany = (e) => {
 
  if(e==2) //user
    this.setState({ company: 0 })
  else
    this.setState({ company: 1 })

}
getAccount =(mail, pass,event)=>{
  event.preventDefault();
  let url;
  if(this.state.company===0)
   url="http://localhost:8001/myaccount/user/"
  else if(this.state.company===1)
   url="http://localhost:8001/myaccount/company/"


  if(mail !=="" &&pass !==""){
  
  Axios.get(url+mail).then((response) => {
    this.setState({ User_data: response.data })
    try{
    let passw=(response.data)[0].pass ;
  if(pass===passw && ((response.data)[0].pass)!=="")
  {
     
      
      console.log(this.state.User_data)

 
        this.setState({ auth: true})
        this.logintoggle()
        console.log(this.state.auth)
      
     
  } else {
    alert("password wrong" )
    
    }
  }catch{
    alert("There is no such a user")
  }
  })


}
}


  render() {

    return (

    <div className="App">
    {/* --------------_Login and Sign Up----------------*/}
      {!this.state.loginflag&&<Login
      logintoggle={this.logintoggle}
      getAccount={this.getAccount}
      auth={this.state.auth}
      loginflag={this.state.loginflagauth}
      handlecompany={this.handlecompany}
      company={this.state.company}
        />}

    {
       this.state.loginflag&&!this.state.auth&&
      <div>
          <div>Please Login in </div>
          <Login
      logintoggle={this.logintoggle}
      getAccount={this.getAccount}
      auth={this.state.auth}
      loginflag={this.state.loginflag}
      handlecompany={this.handlecompany}
      company={this.state.company}
      />
        </div>
        }
           {/* --------------_Login and Sign Up----------------*/}

      {/* ------------------------------------------------------------------------------------------*/}

           {/* --------------_Company Hompage ----------------*/}
      {this.state.company===1&&this.state.loginflag&&this.state.auth&&
      <div>
          <div>comp_name={this.state.User_data[0].comp_name} </div>
          <div> representative_fame={this.state.User_data[0].representative_fame}</div>
      
        </div>
      }
         {/* --------------_Company Hompage -------------------*/}

          {/* --------------USer Hompage -------------------*/}

       {this.state.loginflag&&this.state.auth&&!this.state.company&&
         <div>
         <Hompage
         user_lname={this.state.User_data[0].user_lname}
         user_fname={this.state.User_data[0].user_fname}
         />
      
        </div>
      }
       
     {/* --------------USer Hompage -------------------*/}
    

    </div>
  );
  }
}

export default App;
