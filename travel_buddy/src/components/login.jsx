import React, { Component } from 'react';
import '../login.css';
import Axios from "axios";
export default class login extends Component {


    state = {
        auth:false,
        login: true,
        company:true,

        mail:"",
        pass:"",
        comp_name :"",
        representative_fame :"",
        representative_lname :"",
        Tele_number :0,
        city :"", 
        country :"",
        street :"", 
        address:"",

        login_mail:"",
        login_pass:"",
        user_Data:[],
    }
    handleMail = (e) => {
        this.setState({ mail: e })
        console.log( e );
      }
    handlePass = (e) => {
        this.setState({ pass: e })
      }
    handlecomp_name = (e) => {
        this.setState({ comp_name: e })
      }
    handlerepresentative_fame = (e) => {
        this.setState({ representative_fame: e })
      }
    handlerepresentative_lname = (e) => {
        this.setState({ representative_lname: e })
      }
    handleTele_number = (e) => {
        this.setState({ Tele_number: e })
      }
    handlecity = (e) => {
        this.setState({ city: e })
      }
    handlecountry = (e) => {
        this.setState({ country: e })
      }
      handlestreet = (e) => {
        this.setState({ street: e })
      }
      handleaddress = (e) => {
        this.setState({ address: e })
      }
   
    insert = () => {
        Axios.post('http://localhost:8001/new_account',
          {
             company :this.state.company,
             mail :this.state.mail,
             pass :this.state.pass,
             comp_name :this.state.comp_name,
             representative_fame :this.state.representative_fame,
             representative_lname :this.state.representative_lname,
             Tele_number :this.state.Tele_number,
             city :this.state.city,
             country :this.state.country,
             street :this.state.street,
             address :this.state.address
          }).then(() => {
            console.log("Asdasd")
           
            console.log("asa")
    
    
          })
          this.props.logintoggle()
       
      }

    


    togglesignup = () => {
        this.setState({ login: false })
        console.log({ login });
    };
    togglelogin = () => {
        this.setState({ login: true })
        console.log({ login });
    };

    render() {

        return (

            <div >
                <div>
                    {(!this.props.auth||!this.props.loginflag)&&
                        <div>
                            {
                            !this.props.loginflag&& //if it is not yet signed up
                               <div>
                              <span className="button" onClick={this.togglelogin}>login</span>
                            <span className="button" onClick={this.togglesignup}>sign up</span>
                            </div>
                            }

                            {/* login */}
                            {this.state.login && <div className="login">
                                <h1 className="title">login</h1>
                                <form>


                                    <input type="text" className="input" placeholder="mail" onChange={(e) => this.handleMail(e.target.value)}/>
                                    <input type="password" className="input" placeholder="password" onChange={(e) => this.handlePass(e.target.value)}/>
                                </form>
                                <button type="submit" className="submit" onClick={()=>this.props.getAccount(this.state.mail,this.state.pass)}>login </button>
                            </div>}
                            {/*------------------------------------ login ------------------------------------*/}
                            {/* -----------------------------------signup */}
                            {!this.state.login &&
                            <div className="login" style={{ height: '450px' }}>
                                <h1 className="title">sign up</h1>
                                <form className="signup">
                                    <input type="mail" className="input" placeholder="email" onChange={(e) => this.handleMail(e.target.value)}/>
                                    <input type="password" className="input" placeholder="password" onChange={(e) => this.handlePass(e.target.value)}/>
                                    <input type="text" className="input" placeholder="company name" onChange={(e) => this.handlecomp_name(e.target.value)}/>
                                    <input type="text" className="input" placeholder="Representative first name" onChange={(e) => this.handlerepresentative_fame(e.target.value)}/>
                                    <input type="text" className="input" placeholder="Representative last name" onChange={(e) => this.handlerepresentative_lname(e.target.value)}/>
                                    <input type="number" className="input" placeholder="Telephone num" onChange={(e) => this.handleTele_number(e.target.value)}/>
                                    <input type="text" className="input" placeholder="city" onChange={(e) => this.handlecity(e.target.value)}/>
                                    <input type="text" className="input" placeholder="country" onChange={(e) => this.handlecountry(e.target.value)}/>
                                    <input type="text" className="input" placeholder="street" onChange={(e) => this.handlestreet(e.target.value)}/>
                                    <input type="text" className="input" placeholder="address" onChange={(e) => this.handleaddress(e.target.value)}/>
                
                                
                                    
                                </form>
                                <button type="submit" className="submit" onClick={this.insert}>sign up </button>
                            </div>
                            }
                            {/*------------------------------------ signup ------------------------------------*/}
                        </div>
                    }
                 
                </div>

            </div>
        );
    }
}