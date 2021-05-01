import React, { Component } from 'react';
import Nav from './navbar';
// import Im from './travel.jpg'
import Im from './travelll.jpg'
import Trips from './trips';
import Footer from './footer';
import Pay from './payment';
import Axios from "axios";
export default class userhomepage extends Component {
 
 state={
    trips:[],
    city:"",
    prices_sign:"",
    price:0,
    Rates:0,
    days_sign:"",
    nom_of_days:0,
    pay:false,
    trip_id:-1,
    date:"",

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

    this.setState({pay:false})

}
 handelcities=(e)=>{
     this.setState({city:e})

     this.setState({prices_sign:""})
    //  this.setState({city:""})
     this.setState({Rates:0})
     this.setState({nom_of_days:0})
     this.setState({price:0})
     let url=""
    let prices_sign="="
    let days_sign="="
    let city="as"
    let Rates=0
    let nom_of_days=0
    let price=0
        
    url=`http://localhost:8001/filtered_trips/` +e+"/"+prices_sign+"/"+price+"/"+Rates+"/"+days_sign+"/"+nom_of_days
    console.log(url)
    
    Axios.get(url).then((response) => {
        this.setState({ trips: response.data })
        
      })

 }
 handelprice=(e)=>{
    this.setState({prices_sign:e[0]})
    this.setState({price:parseInt(e.split(e[0])[1])})
    // this.setState({prices_sign:""})
    this.setState({city:""})
    this.setState({Rates:0})
    this.setState({nom_of_days:0})
    // this.setState({price:0})
    let url=""
    let prices_sign="="
    let days_sign="="
    let city="as"
    let Rates=0
    let nom_of_days=0
    let price=0
    
    
    url=`http://localhost:8001/filtered_trips/` +city+"/"+e[0]+"/"+parseInt(e.split(e[0])[1])+"/"+Rates+"/"+days_sign+"/"+nom_of_days
    console.log(url)
    
    Axios.get(url).then((response) => {
        this.setState({ trips: response.data })
        
      })

 }
 handelRates=(e)=>{
    //  console.log(parseInt(e.split(" ")[0]))
    this.setState({Rates:parseInt(e.split(" ")[0])})
    this.setState({prices_sign:""})
    this.setState({city:""})
    // this.setState({Rates:0})
    this.setState({nom_of_days:0})
    this.setState({price:0})
    let url=""
    let prices_sign="="
    let days_sign="="
    let city="as"
    let Rates=0
    let nom_of_days=0
    let price=0
    
    
    url=`http://localhost:8001/filtered_trips/` +city+"/"+prices_sign+"/"+price+"/"+parseInt(e.split(" ")[0])+"/"+days_sign+"/"+nom_of_days
    console.log(url)
    let trips=[]
    Axios.get(url).then((response) => { 
        this.setState({ trips: response.data })
        trips=response.data 
        
      })
      



 }
 handelnom_of_days=(e)=>{
 
      this.setState({days_sign:e[0]})

      this.setState({prices_sign:""})
      this.setState({city:""})
      this.setState({Rates:0})
      this.setState({nom_of_days:0})
      this.setState({price:0})

    //   console.log(parseInt(e.split(e[0])[1]))
    this.setState({nom_of_days:parseInt(e.split(e[0])[1])})

    let url=""
    let prices_sign="="
    let days_sign="="
    let city="as"
    let Rates=0
    let nom_of_days=0
    let price=0
    
    
    url=`http://localhost:8001/filtered_trips/` +city+"/"+prices_sign+"/"+price+"/"+Rates+"/"+e[0]+"/"+parseInt(e.split(e[0])[1])
    console.log(url)
    
    Axios.get(url).then((response) => {
        this.setState({ trips: response.data })
        
      })
 }
 handelreset=()=>{
    this.setState({days_sign:""})
    this.setState({prices_sign:""})
    this.setState({city:""})
    this.setState({Rates:0})
    this.setState({nom_of_days:0})
    this.setState({price:0})

    let url=""
  
    if(this.props.Upage===false)
     {url='http://localhost:8001/trips'}
    else
     url='http://localhost:8001/reservation/'+this.props.user_mail

    Axios.get(url).then((response) => {
      this.setState({ trips: response.data })
      
    })
 }
 handelCheckOut=(reserved,id)=>{
    let today = new Date();
    let date="";
     if(reserved===false)
     { 
         this.setState({pay:true})
         this.setState({trip_id:id})
         
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        
        this.setState({date:date})
    }
     else
     alert("reserved already")
    //  console.log(" "reserved)
 }

 hidePay=()=>{
    this.setState({pay:false})
 }
    render() {

        return (
            <div>

      

                
                     <Nav 
                    user_lname={this.props.user_lname}
                    user_fname={this.props.user_fname}
                    userPagetoggle={this.props.userPagetoggle}
                    />
                  {!this.state.pay&&
                  <div  >
                    <img src={Im} alt="Travel made easy" class ="responsive-image" ></img>

                    <div className="AllOverEgypt "> Let's Take you all over Egypt!</div>
                    {/* <div className="AllOverEgypt "> Let's Take you all over Egypt!</div> */}
                   

                    <div className="shadow bg-body bg-lighter">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg">
                      
                                <div className="container-fluid shadow-lg m-1">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="text-start text-primary fs-5 fw-bold ml-3">FILTER BY:</div>
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">              
                                    <li className="nav-item dropdown">

                                    {this.state.city!==""&&
                                    <div>
                                            <a className="nav-link dropdown-toggle bg-success rounded m-1 shadow text-light fs-6"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {this.state.city}
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item " onClick={(e)=>this.handelcities(e.target.innerText)}>Alex</a></li>
                                            <li><a className="dropdown-item" onClick={(e)=>this.handelcities(e.target.innerText)}>Dahab</a></li>
                                            <li><a className="dropdown-item" onClick={(e)=>this.handelcities(e.target.innerText)}>Hurdga</a></li>
                                        
                                            </ul>
                                    </div>
                                            }

                                      {  this.state.city===""&&
                                      <div>
                                            <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            cities 
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item " onClick={(e)=>this.handelcities(e.target.innerText)}>Alex</a></li>
                                            <li><a className="dropdown-item" onClick={(e)=>this.handelcities(e.target.innerText)}>Dahab</a></li>
                                            <li><a className="dropdown-item" onClick={(e)=>this.handelcities(e.target.innerText)}>Hurdga</a></li>
                                        
                                            </ul>
                                        </div>}
                                    </li>

                                    <li className="nav-item dropdown">
                                    {this.state.price!==0&&
                                    <div>
                                            <a className="nav-link dropdown-toggle bg-success rounded m-1 shadow text-light fs-6"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {this.state.prices_sign}{this.state.price} Egp
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" onClick={(e)=>{this.handelprice(e.target.innerText)}}>=1000</a></li>
                                        <li><a className="dropdown-item" onClick={(e)=>{this.handelprice(e.target.innerText)}}>&lt;1000</a></li>
                                        <li><a className="dropdown-item" onClick={(e)=>{this.handelprice(e.target.innerText)}}>	&gt;1000</a></li>
                                        <li><a className="dropdown-item" onClick={(e)=>{this.handelprice(e.target.innerText)}}>&gt;5000 </a></li>
                                       
                                        </ul>
                                    </div>
                                            }
                                        
                                        {this.state.price==0&&
                                        <div>
                                        <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Prices
                                        </a>
                                        
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" onClick={(e)=>{this.handelprice(e.target.innerText)}}>=1000</a></li>
                                        <li><a className="dropdown-item" onClick={(e)=>{this.handelprice(e.target.innerText)}}>&lt;1000</a></li>
                                        <li><a className="dropdown-item" onClick={(e)=>{this.handelprice(e.target.innerText)}}>	&gt;1000</a></li>
                                        <li><a className="dropdown-item" onClick={(e)=>{this.handelprice(e.target.innerText)}}>&gt;5000 </a></li>
                                       
                                        </ul>
                                        </div>}
                                    </li>


                                    <li className="nav-item dropdown">
                                    {this.state.Rates!==0&&
                                    <div>
                                            <a className="nav-link dropdown-toggle bg-success rounded m-1 shadow text-light fs-6"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {this.state.Rates} stars
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a className="dropdown-item" onClick={(e)=>{this.handelRates(e.target.innerText)}}>5 stars</a></li>
                                                <li><a className="dropdown-item" onClick={(e)=>{this.handelRates(e.target.innerText)}}>4 stars</a></li>
                                                <li><a className="dropdown-item" onClick={(e)=>{this.handelRates(e.target.innerText)}}>3 stars</a></li>
                                                <li><a className="dropdown-item" onClick={(e)=>{this.handelRates(e.target.innerText)}}>2 stars</a></li>
                                                <li><a className="dropdown-item" onClick={(e)=>{this.handelRates(e.target.innerText)}}>1 stars</a></li>
                                                
                                                </ul>
                                            </div>
                                            
                                            }
                                            {this.state.Rates===0&&
                                            <div>
                                                <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Rates 
                                                </a>
                                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a className="dropdown-item" onClick={(e)=>{this.handelRates(e.target.innerText)}}>5 stars</a></li>
                                                <li><a className="dropdown-item" onClick={(e)=>{this.handelRates(e.target.innerText)}}>4 stars</a></li>
                                                <li><a className="dropdown-item" onClick={(e)=>{this.handelRates(e.target.innerText)}}>3 stars</a></li>
                                                <li><a className="dropdown-item" onClick={(e)=>{this.handelRates(e.target.innerText)}}>2 stars</a></li>
                                                <li><a className="dropdown-item" onClick={(e)=>{this.handelRates(e.target.innerText)}}>1 stars</a></li>
                                                
                                                </ul>
                                            </div>}
                                    </li>


                                    <li className="nav-item dropdown">
                                    {this.state.nom_of_days!==0&&
                                    <div>
                                            <a className="nav-link dropdown-toggle bg-success rounded m-1 shadow text-light fs-6"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {this.state.days_sign}{this.state.nom_of_days} days
                                            </a>
                                              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                              <li><a className="dropdown-item" onClick={(e)=>{this.handelnom_of_days(e.target.innerText)}}>=1</a></li>
                                              <li><a className="dropdown-item" onClick={(e)=>{this.handelnom_of_days(e.target.innerText)}}>&gt;1</a></li>
                                              <li><a className="dropdown-item" onClick={(e)=>{this.handelnom_of_days(e.target.innerText)}}>&gt;3</a></li>
                                          
                                              </ul>
                                      </div>
                                            }

                                            {this.state.nom_of_days===0&&
                                            <div>
                                                    <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> 
                                                    nom. of days
                                                    </a>
                                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <li><a className="dropdown-item" onClick={(e)=>{this.handelnom_of_days(e.target.innerText)}}>=1</a></li>
                                                    <li><a className="dropdown-item" onClick={(e)=>{this.handelnom_of_days(e.target.innerText)}}>&gt;1</a></li>
                                                    <li><a className="dropdown-item" onClick={(e)=>{this.handelnom_of_days(e.target.innerText)}}>&gt;3</a></li>
                                                
                                                    </ul>
                                            </div>}
                                    </li>
                                            
                                   


                                </ul>
                            


                            </div>
                            </div>
                                
                            <button type="button" class="btn btn-success justify-content-md-end ml-3 mr-3 pl-5 pr-5" onClick={()=>this.handelreset()}>Reset</button>
                                        
                        </nav>
                        
                    </div>
                
                    <Trips
                    Upage={this.props.Upage}
                    city={this.state.city}
                    prices_sign={this.state.prices_sign}
                    price={this.state.price}
                    Rates={this.state.Rates}
                    days_sign={this.state.days_sign}
                    nom_of_days={this.state.nom_of_days}
                    user_mail={this.props.user_mail}
                    trips={this.state.trips}
                    handelCheckOut={this.handelCheckOut}
                  
                    />

                   <Footer/>
                   </div>}
                   {this.state.pay&&
                   <div>
                        
                        <Pay
                        user_mail={this.props.user_mail}
                        trip_id={this.state.trip_id}
                        date={this.state.date}
                        hidePay={this.hidePay}
                        />
                        
                        <Footer/>
                   </div>
                   }
            </div>
        )
    }

}