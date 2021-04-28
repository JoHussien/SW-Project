import React, { Component } from 'react';
import Axios from "axios";
import Im from './travell.jpeg'
import Nav from './navbar';
import Trips from './trips';
import Footer from './footer';

export default class customer extends Component {
    state = {
        trips:[],
        appear: false,
        rateAppear:"d-none",
        tripBackgroud:"d-none"

    }

    componentDidMount() {
        let url=""
      
        if(this.props.Upage===false)
         {url='http://localhost:8001/trips'}
        else
         url='http://localhost:8001/reservation/'+this.props.user_mail
    
        Axios.get(url).then((response) => {
          this.setState({ trips: response.data })
          
        })
    }
    handelRate_appear=()=>{
        if(this.state.rateAppear=="d-none")
            {
                this.setState({rateAppear:"overlay"})
                this.setState({tripBackgroud:"Tripbackgroud"})
            }
        else
            {
                this.setState({rateAppear:"d-none"})
                this.setState({tripBackgroud:"d-none"})
            }
        }

    render() {

        return (
            <div>
                <Nav
                    user_lname={this.props.user_lname}
                    user_fname={this.props.user_fname}
                    userHomepagetoggle={this.props.userHomepagetoggle}
                    />

                   <div className = "cover"></div>
                    <div className="profile_pic">
                    <div className="blackpr fas fa-user-alt"></div>
                    </div>

                    <div className = "rectangle"> </div>
                    <div className ="name shadow"> {this.props.user_fname} {this.props.user_lname} </div>
                    <div className = "rectangle"> </div>
                    <div className = "rectangle"> </div>
{/* -------------------------------------informaton ------------------------------------- */}
                    <div className="container"> 
                    <div className = "container_2_info shadow m-5"> 
                    <div className= "text-capitalize  text-start fs-1 text-margin mt-5 ml-5"> Information</div> 
                        <div className="row">
                            <div className="col">
                                
                                <div className="text-capitalize fs-5  text-start m-3" >First Name: <span className="text-info fw-light">{this.props.user_fname}</span></div>
                                <div className="text-capitalize fs-5  text-start m-3">Last Name: <span className="text-info fw-light">{this.props.user_lname}</span></div>
                                <div className="text-capitalize fs-5  text-start m-3">Mail:<span className="text-info fw-light">{this.props.user_mail}</span> </div>
                                <div className="text-capitalize fs-5  text-start m-3">Telephone number:<span className="text-info fw-light">{this.props.tele_number}</span> </div>
                            </div>
                            <div className="col">
                                
                               
                                <div className="text-capitalize fs-5  text-start m-3">country: <span className="text-info fw-light">{this.props.country}</span></div>
                                <div className="text-capitalize fs-5  text-start m-3">city: <span className="text-info fw-light">{this.props.city}</span></div>
                                <div className="text-capitalize fs-5  text-start m-3">BD: <span className="text-info fw-light">{this.props.BD}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
 {/* -------------------------------------informaton ------------------------------------- */}
                    <div className="container ">
                        <div className = "container_2 shadow m-5"> 
                            <div className= "text-capitalize  text-start fs-1 text-margin m-5"> My Trips</div> 


                    <div className="pl-5 ml-5">       
                    <Trips 
                    Upage={this.props.Upage}
                    user_mail={this.props.user_mail}
                    handelRate_appear={this.handelRate_appear}
                    trips={this.state.trips}
                    
                    />
                    </div>
  
                    </div>   


</div>
<div className={this.state.tripBackgroud}></div>
    <div className="container ">
<div className={ "shadow "+this.state.rateAppear}>
        
        <select class="form-select" aria-label="Default select example">
            <option selected>Open to choose your rate</option>
            <option value="1 Star">One Star</option>
            <option value="2 Stars">Two Stars</option>
            <option value="3 Stars">Three Stars</option>
            <option value="4 Stars">Four Stars</option>
            <option value="5 Stars">Five Stars</option>
        </select>

        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Please describe your trip</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <input class="btn btn-primary" type="submit" value="Submit"/>
        <a className={"btn btn-primary cancelButton "} onClick={()=>this.handelRate_appear()}>cancel</a>
    
    </div>
    </div>
    <Footer/>
               
            </div >
        )
    }

}