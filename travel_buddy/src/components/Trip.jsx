import React, { Component } from 'react';



import Axios from "axios";
export default class trips extends Component {

    state = {
        photo: "",
        overlay:"d-none",
        tripBackgroud:"d-none",
        company:[],
        stars:0,
        user_rates:[],
        reserved:false,
       

    }
    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    componentDidMount() {
        Axios.get('http://localhost:8001/Trips_photos/'+this.props.id).then((response) => {


            var base64Flag = 'data:image/jpeg;base64,';
            var imageStr = this.arrayBufferToBase64(response.data[0].photo.data);

          this.setState({ photo: base64Flag + imageStr })
        //   console.log(this.state.photo)
        })

        Axios.get('http://localhost:8001/company_for_user/'+this.props.comp_mail).then((response) => {
          this.setState({ company: response.data[0] })
        //   console.log(this.state.company.comp_name)
        })
        Axios.get('http://localhost:8001/company/rates/'+this.props.comp_mail).then((response) => {
            this.setState({ stars: response.data[0].stars })
            // console.log("Stars"+this.state.stars)
          })

          Axios.get('http://localhost:8001/user_to_comp/rates/'+this.props.user_mail+"/"+this.props.comp_mail).then((response) => {
            this.setState({ user_rates: response.data[0] })
            // console.log(this.props.user_mail)
          })

          Axios.get('http://localhost:8001/reservation/'+this.props.id+"/"+this.props.user_mail).then((response) => {
            try{
          if(response.data[0].mail)
            this.setState({ reserved: true })
            // console.log(this.state.reserved)
        }
         catch{
            this.setState({ reserved: false })
            // console.log(this.state.reserved)
         }
           
          })

    }
handelShow=()=>{
    if(this.state.overlay=="d-none")
        {
            this.setState({overlay:"overlay"})
            this.setState({tripBackgroud:"Tripbackgroud"})
        }
    else
        {
            this.setState({overlay:"d-none"})
            this.setState({tripBackgroud:"d-none"})
        }

    // console.log(this.state.overlay)
}
    render() {

        return (
            <div>

            <div className=" container ">
                <div className={this.state.tripBackgroud}></div>
                <div className={this.state.overlay+ " shadow" }>
                            <h1 className="text-capitalize"> {this.props.visited_place}</h1>
                    <div class="row">
                            <div class="col border-right">
                                <img src={this.state.photo} className="card-img-top  shadow cropped2" />
                                <div className="text-capitalize fs-4 text-center">{this.props.city},{this.props.country}</div>
                            </div>
                            
                            <div class="col ">
                                <div  className="text-capitalize fs-3 text-info text-start" >{this.props.price}<span className="fs-6">EGP</span></div>
                                <br/>
                                <div className="border-bottom"></div>
                              
                                <li className="text-capitalize text-start"> The program will be <span className="fs-6 text-success">{this.props.days} days</span></li>
                                <li className=" text-capitalize text-start"> The program will be <span className="fs-6 text-success">{this.props.hours} hours</span></li>
                            
                                <br/>

                                <div className="border-bottom"></div>
                                <div className="text-capitalize text-start">From: "day" To "day"</div>
                                <div className="text-capitalize text-start">From: "hour" "am" To "hour" "pm"</div>
 
                                <br/>
                                <br/>
                                <div className="border-bottom"></div>


                                <h5 className="text-capitalize text-start">Trip Description:</h5>
                                <br/>
                                <div className="">{this.props.desciption}</div>
                            </div>
                            <div class="col-3 border-left">
                                {!this.props.Upage&&<a className={"btn btn-success checkoutButton shadow "}onClick={()=>this.props.handelCheckOut(this.state.reserved,this.props.id)} >check out</a>}
                                <br/>
                                <br/>
                                <br/>
                                <div className="border-bottom"> </div>
                                <br/>
                                <div className="text-capitalize text-start ">places left: </div>
                              
                                <div className="border-bottom"></div>
                                <br/>
                                <div className="text-capitalize font-size-sm fw-light text-start fs-6"> Company Name: <span className="text-success">{this.state.company.comp_name}</span> </div>
                                <div className="text-start">
                                            <span>Star Rating</span>:
                                            {this.state.stars >= 1 ? <span class="fa fa-star checked"></span> : <span class="fa fa-star unchecked"></span>}
                                            {this.state.stars >= 2 ? <span class="fa fa-star checked"></span> : <span class="fa fa-star unchecked"></span>}
                                            {this.state.stars >= 3 ? <span class="fa fa-star checked"></span> : <span class="fa fa-star unchecked"></span>}
                                            {this.state.stars >= 4 ? <span class="fa fa-star checked"></span> : <span class="fa fa-star unchecked"></span>}
                                            {this.state.stars >= 5 ? <span class="fa fa-star checked"></span> : <span class="fa fa-star unchecked"></span>}
                                </div>
                                        <div className="border-bottom"></div>
                                <br/>

                                <div className="text-capitalize font-size-sm fw-light text-start fs-6"> Representative name:<span className="text-success">{this.state.company.representative_fame} {this.state.company.representative_lname} </span></div>
                                <br/>
                                <div className="text-capitalize font-size-sm fw-light text-start fs-6"> TelePhone:<span className="text-success">{this.state.company.Tele_number} </span></div>
                               



                                <a className={"btn btn-primary cancelButton "} onClick={()=>this.props.handeldisable(this.state.overlay)+this.handelShow()}>cancel</a>
                            </div>
                    </div>                   
                </div>



                    <div className="cards" style={{width:"18em"}}>
                         
                        <div className="  shadow card-body" style={{width: "18rem", backgroundColor:"white",cursor:"pointer"}} >
                         <img src={this.state.photo} className="card-img-top cropped1" alt="..."/>
                            <h5 className="text-capitalize card-title">{this.props.city},{this.props.country}</h5>
                            {!this.props.Upage&&<p className="text-capitalize card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>}
                            {this.props.Upage&&<div className="text-capitalize  fw-light text-center fs-6"> Company Name: <span className="text-success">{this.state.company.comp_name}</span> </div>}
                            <ul className="list-group list-group-flush">
                            {!this.props.Upage&&<li className="text-capitalize list-group-item ">Price:{this.props.price}</li>}
                            <li className="text-capitalize list-group-item ">Date:</li>

                            </ul>
                        
                            <a className={"btn btn-primary "+this.props.disable} onClick={()=>this.props.handeldisable(this.state.overlay)+this.handelShow()}>View Trip</a>
                            {this.props.Upage&&<a class="btn btn-primary m-3" onClick={()=>this.props.handelRate_appear(this.state.user_rates,this.props.comp_mail)}>Rate Trip</a>}
                        </div>
                        
                    </div>


     






                 </div>   
            </div >
        )
    }

}