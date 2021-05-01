import React, { Component } from 'react';
import Axios from "axios";
import Im from './cover.jpg'
import Nav from './navbar';
import Trips from './trips';
import Footer from './footer';

export default class customer extends Component {
    state = {
        trips:[],
        appear: false,
        rateAppear:"d-none",
        tripBackgroud:"d-none",
        stars:0,
        desciption:"",
        ratedAlready:0,
        comp_mail:"",


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
    handelRate_appear=(user_rates,mail)=>{
            
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
            try{
            if(user_rates.user_mail!==null){
                //user is already rated
                this.setState({ratedAlready:1})
                this.setState({stars:user_rates.stars})
                this.setState({desciption:user_rates.descri})
                this.setState({comp_mail:mail})
                
               
            
            }
        }catch{
            //still need a rating
            this.setState({ratedAlready:0})
            this.setState({comp_mail:mail})
           
                
        }
            }
    handelrating=(e)=>{
            this.setState({stars:e})
            // console.log(e)
        }
    handelDescription=(e)=>{
            this.setState({desciption:e})
            
        }

    InsertRate=()=>{
        let url="http://localhost:8001/new_rating"
        Axios.post(url,
            {
                desciption :this.state.desciption,
                stars :this.state.stars,
                user_mail:this.props.user_mail,
                comp_name:this.state.comp_mail
              
            }).then(() => {
              
            })
           alert("Rate is inserted, Thank you")
            this.handelRate_appear()
            this.setState({ratedAlready:1})
    }

    render() {

        return (
            <div>
                <Nav
                    user_lname={this.props.user_lname}
                    user_fname={this.props.user_fname}
                    userHomepagetoggle={this.props.userHomepagetoggle}
                    />

                   <img src={Im} className = "cover"/>
                    <div className="profile_pic">

                    <div className="blackpr fas fa-user-alt"></div>
                    </div>

                    <div className = "rectangle"> 
                    
                    </div>
                    <div className ="name shadow"> {this.props.user_fname} {this.props.user_lname} </div>
                    <div className = "rectangle"> </div>
                    <div className = "rectangle"> </div>
{/* -------------------------------------informaton ------------------------------------- */}
                    <div className="container"> 
                    <div className = "container_2_info   shadow m-5 bg-dark rounded"> 
                    <div className= "text-capitalize  text-start fs-1 text-margin mt-5 ml-5 text-light"> Information</div> 
                        <div className="row">
                            <div className="col">
                                
                                <div className="text-capitalize fs-5  text-start m-3 ml-5  text-light" >First Name: <span className="text-info fw-light">{this.props.user_fname}</span></div>
                                <div className="text-capitalize fs-5  text-start m-3 ml-5  text-light">Last Name: <span className="text-info fw-light">{this.props.user_lname}</span></div>
                                <div className="text-capitalize fs-5  text-start m-3 ml-5  text-light">Mail:<span className="text-info fw-light">{this.props.user_mail}</span> </div>
                                <div className="text-capitalize fs-5  text-start m-3 ml-5  text-light">Telephone number:<span className="text-info fw-light">{this.props.tele_number}</span> </div>
                            </div>
                            <div className="col">
                                
                               
                                <div className="text-capitalize fs-5  text-start m-3 ml-5  text-light">country: <span className="text-info fw-light">{this.props.country}</span></div>
                                <div className="text-capitalize fs-5  text-start m-3 ml-5  text-light">city: <span className="text-info fw-light">{this.props.city}</span></div>
                                <div className="text-capitalize fs-5  text-start m-3 ml-5  text-light">BD: <span className="text-info fw-light">{this.props.BD}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
 {/* -------------------------------------informaton ------------------------------------- */}
                    <div className="container ">
                        <div className = "container_2   shadow m-5 bg-dark  rounded"> 
                            <div className= "text-capitalize  text-start fs-1 text-margin ml-5 mt-5 text-light"> My Trips</div> 


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
        {!this.state.ratedAlready&&
        <div className={ "shadow "+this.state.rateAppear}>
        
                                        <div className="text-center">
                                            <div className="fs-1 text-center text-primary">Rate the Trip</div>
                                            {this.state.stars >= 1 ? <span className="fa fa-star checked fs-1" style={{cursor:"pointer"}}onClick={(e)=>this.handelrating(e.target.innerText)}> <span className="text-light opacityzero">1</span></span> : <span className="fa fa-star unchecked fs-1" style={{cursor:"pointer"}} onClick={(e)=>this.handelrating(e.target.innerText)}> <span className="text-light opacityzero">1</span></span>}
                                            {this.state.stars >= 2 ? <span className="fa fa-star checked fs-1" style={{cursor:"pointer"}}onClick={(e)=>this.handelrating(e.target.innerText)}><span className="text-light opacityzero">2</span></span> : <span className="fa fa-star unchecked fs-1" style={{cursor:"pointer"}} onClick={(e)=>this.handelrating(e.target.innerText)}><span className="text-light opacityzero">2</span></span>}
                                            {this.state.stars >= 3 ? <span className="fa fa-star checked fs-1" style={{cursor:"pointer"}}onClick={(e)=>this.handelrating(e.target.innerText)}><span className="text-light opacityzero">3</span></span> : <span className="fa fa-star unchecked fs-1" style={{cursor:"pointer"}}onClick={(e)=>this.handelrating(e.target.innerText)}><span className="text-light opacityzero">3</span></span>}
                                            {this.state.stars >= 4 ? <span className="fa fa-star checked fs-1" style={{cursor:"pointer"}}onClick={(e)=>this.handelrating(e.target.innerText)}><span className="text-light opacityzero">4</span></span> : <span className="fa fa-star unchecked fs-1" style={{cursor:"pointer"}}onClick={(e)=>this.handelrating(e.target.innerText)}><span className="text-light opacityzero">4</span></span>}
                                            {this.state.stars >= 5 ? <span className="fa fa-star checked fs-1" style={{cursor:"pointer"}}onClick={(e)=>this.handelrating(e.target.innerText)}><span className="text-light opacityzero">5</span></span> : <span className="fa fa-star unchecked fs-1" style={{cursor:"pointer"}}onClick={(e)=>this.handelrating(e.target.innerText)}><span className="text-light opacityzero">5</span></span>}
                                        </div>

            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Please describe your trip</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="7" onClick={(e)=>this.handelDescription(e.target.value)}></textarea>
            </div>
            <a className={"btn btn-primary cancelButton "} onClick={()=>this.handelRate_appear()}>Cancel</a>
            <a className="btn btn-primary cancelButton" onClick={()=>this.InsertRate()}>Submit</a>
        
    
        </div>}

        {this.state.ratedAlready===1&&
        <div className={ "shadow "+this.state.rateAppear}>
                                        <div className="text-capitalize text-center bg-success">You rated this already</div>
                                        <div className="text-center">
                                            <div className="fs-1 text-center text-primary">Rate the Trip</div>
                                            {this.state.stars >= 1 ? <span className="fa fa-star checked fs-1" > <span className="text-light opacityzero">1</span></span> : <span className="fa fa-star unchecked fs-1" > <span className="text-light opacityzero">1</span></span>}
                                            {this.state.stars >= 2 ? <span className="fa fa-star checked fs-1" ><span className="text-light opacityzero">2</span></span> : <span className="fa fa-star unchecked fs-1" ><span className="text-light opacityzero">2</span></span>}
                                            {this.state.stars >= 3 ? <span className="fa fa-star checked fs-1" ><span className="text-light opacityzero">3</span></span> : <span className="fa fa-star unchecked fs-1" ><span className="text-light opacityzero">3</span></span>}
                                            {this.state.stars >= 4 ? <span className="fa fa-star checked fs-1" ><span className="text-light opacityzero">4</span></span> : <span className="fa fa-star unchecked fs-1" ><span className="text-light opacityzero">4</span></span>}
                                            {this.state.stars >= 5 ? <span className="fa fa-star checked fs-1" ><span className="text-light opacityzero">5</span></span> : <span className="fa fa-star unchecked fs-1" ><span className="text-light opacityzero">5</span></span>}
                                        </div>

            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                <div>{this.state.desciption}</div>

            </div>
            <a className={"btn btn-primary cancelButton "} onClick={()=>this.handelRate_appear()}>Cancel</a>
            
        
    
        </div>}

    </div>
    <Footer/> 
               
    </div >
        )
    }

}