import React, { Component } from 'react';
import Im from './travell.jpeg'


import Axios from "axios";
export default class trips extends Component {

    state = {
        photo: "",
        overlay:"d-none",
        tripBackgroud:"d-none",
        company:[],
       

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
          console.log(this.state.company.comp_name)
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

    console.log(this.state.overlay)
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
                                <a className={"btn btn-success checkoutButton shadow "} >check out</a>
                                <br/>
                                <br/>
                                <br/>
                                <div className="border-bottom"> </div>
                                <br/>
                                <div className="text-capitalize text-start ">places left: </div>
                              
                                <div className="border-bottom"></div>
                                <br/>
                                <div className="text-capitalize font-size-sm fw-light text-start fs-6"> Company Name: <span className="text-success">{this.state.company.comp_name}</span> </div>
                                <br/>
                                <div className="text-capitalize font-size-sm fw-light text-start fs-6"> Representative name:<span className="text-success">{this.state.company.representative_fame} {this.state.company.representative_lname} </span></div>
                                <br/>
                                <div className="text-capitalize font-size-sm fw-light text-start fs-6"> TelePhone:<span className="text-success">{this.state.company.Tele_number} </span></div>
                               



                                <a className={"btn btn-primary cancelButton "} onClick={()=>this.props.handeldisable(this.state.overlay)+this.handelShow()}>cancel</a>
                            </div>
                    </div>                   
                </div>



                    <div className=" cards" style={{width:"18em"}}>
                         
                        <div className="  shadow card-body">
                         <img src={this.state.photo} className="card-img-top cropped1" alt="..."/>
                            <h5 className="text-capitalize card-title">{this.props.city},{this.props.country}</h5>
                            <p className="text-capitalize card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <ul className="list-group list-group-flush">
                            <li className="text-capitalize list-group-item ">Price:{this.props.price}</li>
                            <li className="text-capitalize list-group-item ">Date:</li>

                            </ul>
                        
                            <a className={"btn btn-primary "+this.props.disable} onClick={()=>this.props.handeldisable(this.state.overlay)+this.handelShow()}>View Trip</a>
                           
                        </div>
                        
                    </div>


     






                 </div>   
            </div >
        )
    }

}