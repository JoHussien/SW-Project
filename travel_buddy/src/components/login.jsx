import React, { Component } from 'react';
import '../login.css';
import Axios from "axios";
export default class login extends Component {


    state = {
        auth:false,
        login: true,
        company:-1,

        mail:"",
        pass:"",
        comp_name :"",
        //Company data for representative
        representative_fame :"",
        representative_lname :"",
        //user data for user name
        user_fname:"",
        user_lname:"",


        Tele_number :0,
        city :"", 
        country :"",
        street :"", 
        address:"",

        //data related to the user
        BD:"",
        gender:"",


        login_mail:"",
        login_pass:"",
        user_Data:[],

        invalidmail:"",
        invalidpass:"",

        invalidmail2:"",
        invalidpass2:"",
        invalidf:"",
        invalidl:"",
        invalidTele:"",
        invalidcomp_name :"",

        invalidcompany1:"",
        invalidcompany2:"",
        
        
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
      handlecompany = (e) => {
        let company2=-1;
        if(e==2) //user
          this.setState({ company: 0 })
        else
          this.setState({ company: 1 })
     
      }
    insert = (event) => {

      let url;
      if(this.state.company===0)
       url="http://localhost:8001/new_account/user/"
      else if(this.state.company===1)
       url="http://localhost:8001/new_account/company"

      if(this.state.mail!==""&&
        this.state.pass !==""&&
        this.state.representative_fame!==""&&
        this.state.representative_lname!==""&&
        this.state.comp_name!==""&&
        this.state.Tele_number!==0&&
        this.state.company!==-1){

        Axios.post(url,
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
             address :this.state.address,
             BD:this.state.BD,
             gender:this.state.gender,
             user_fname:this.state.user_fname,
             user_lname:this.state.user_lname,

     

        

          }).then(() => {
            console.log("Asdasd")
           
            console.log("asa")
    
    
          })
          this.props.logintoggle()
          event.preventDefault();
        }
      }

    


    togglesignup = () => {
        this.setState({ login: false })
        console.log({ login });
    };
    togglelogin = () => {
        this.setState({ login: true })
        console.log({ login });
    };

    validateInput=(mail, pass)=>{

      if(mail!=="")
      this.setState({ invalidmail: "is-valid" })
      else
      this.setState({ invalidmail: "is-invalid" })

      if(pass!=="")
      this.setState({ invalidpass: "is-valid" })
      else
      this.setState({ invalidpass: "is-invalid" })
      if(this.state.company!==-1)
      this.setState({ invalidcompany1: "is-valid" })
      else
      this.setState({ invalidcompany1: "is-invalid" })

    }
    validateSign=()=>{

      if(this.state.mail!=="")
      this.setState({ invalidmail2: "is-valid" })
      else
      this.setState({ invalidmail2: "is-invalid" })

      if( this.state.pass !=="")
      this.setState({ invalidpass2: "is-valid" })
      else
      this.setState({ invalidpass2: "is-invalid" })

      if( this.state.comp_name!=="")
      this.setState({ invalidcomp_name: "is-valid" })
      else
      this.setState({ invalidcomp_name: "is-invalid" })

      if( this.state.representative_fame!=="")
      this.setState({ invalidf: "is-valid" })
      else
      this.setState({ invalidf: "is-invalid" })


      if(this.state.representative_lname!=="")
      this.setState({ invalidl: "is-valid" })
      else
      this.setState({ invalidl: "is-invalid" })

      if(this.state.Tele_number!==0)
      this.setState({ invalidTele: "is-valid" })
      else
      this.setState({ invalidTele: "is-invalid" })
      if(this.state.company!==-1)
      this.setState({ invalidcompany2: "is-valid" })
      else
      this.setState({ invalidcompany2: "is-invalid" })

    }

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
                                <form className="needs-validation">
                                <div className="mb-3">
                                    <select className={"inputLogin "+"form-control "+this.state.invalidcompany1} required aria-label="select example" onChange={(e)=>this.props.handlecompany(e.target.value)}>
                                      <option value="">Open this select menu</option>
                                      <option value="1">Company</option>
                                      <option value="2">User</option>
                                   
                                    </select>
                                    <div class="invalid-feedback">Example invalid select feedback</div>
                                  </div>
                                    <input type="text" className={"inputLogin" +" form-control "+this.state.invalidmail} id="validationServer01" placeholder="mail" onChange={(e) => this.handleMail(e.target.value)} required/>
                                    <input type="password" className={"inputLogin" +" form-control "+this.state.invalidpass}  id="validationServer02"placeholder="password"  onChange={(e) => this.handlePass(e.target.value)} required/>
                                    <button  className="submit" onClick={(e)=>this.props.getAccount(this.state.mail,this.state.pass,e)+this.validateInput(this.state.mail, this.state.pass)}>login </button>
                                </form>
                              
                            </div>}
                            {/*------------------------------------ login ------------------------------------*/}
                            {/* -----------------------------------signup */}
                            {!this.state.login &&
                            <div className="login" style={{ height: '450px' }}>
                                <h1 className="title ">sign up</h1>
                                <form className="needs-validation">
                                  <div className="signup">

                                  <div class="mb-3">
                                    <select className={"inputSign "+"form-control "+this.state.invalidcompany2} required aria-label="select example" onChange={(e)=>this.handlecompany(e.target.value)}>
                                      <option value="">Open this select menu</option>
                                      <option value="1">Company</option>
                                      <option value="2">User</option>
                                   
                                    </select>
                                    <div class="invalid-feedback">Example invalid select feedback</div>
                                  </div>
                                 
                                    <input type="mail" className={"inputSign" +" form-control "+this.state.invalidmail2}  placeholder="email" onChange={(e) => this.handleMail(e.target.value)}required/>
                                    <input type="password" className={"inputSign" +" form-control "+this.state.invalidpass2} placeholder="password" onChange={(e) => this.handlePass(e.target.value)}required/>
                                    <input type="text" className={"inputSign" +" form-control "+this.state.invalidcomp_name}  placeholder="company name" onChange={(e) => this.handlecomp_name(e.target.value)}required/>
                                   {this.state.company==1&& <input type="text" className={"inputSign" +" form-control "+this.state.invalidf}  placeholder="Representative first name" onChange={(e) => this.handlerepresentative_fame(e.target.value)}required/>}
                                   {this.state.company==1&&<input type="text" className={"inputSign" +" form-control "+this.state.invalidl} placeholder="Representative last name" onChange={(e) => this.handlerepresentative_lname(e.target.value)}required/>}
                                    <input type="number" className={"inputSign" +" form-control "+this.state.invalidTele}  placeholder="Telephone num" onChange={(e) => this.handleTele_number(e.target.value)}required/>
                                    <input type="text" className={"inputSign" +" form-control "}  placeholder="city" onChange={(e) => this.handlecity(e.target.value)}/>
                                    <input type="text" className={"inputSign" +" form-control "}  placeholder="country" onChange={(e) => this.handlecountry(e.target.value)}/>
                                    <input type="text" className={"inputSign" +" form-control "} placeholder="street" onChange={(e) => this.handlestreet(e.target.value)}/>
                                    <input type="text" className={"inputSign" +" form-control "}  placeholder="address" onChange={(e) => this.handleaddress(e.target.value)}/>
                                   
                                    </div  >

                                  
                                           
                                           

                                    <button type="submit" className="submit" onClick={(e)=>this.insert(e)+this.validateSign()}>sign up </button>
                                    
                                </form>
                                
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