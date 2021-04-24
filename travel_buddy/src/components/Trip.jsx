import React, { Component } from 'react';
import Im from './travell.jpeg'


import Axios from "axios";
export default class trips extends Component {

    state = {
        photo: "",
        overlay:"d-none",
       

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
          console.log(this.state.photo)
        })
    }
handelShow=()=>{
    if(this.state.overlay=="d-none")
        {
            this.setState({overlay:"overlay"})
        }
    else
        this.setState({overlay:"d-none"})

    console.log(this.state.overlay)
}
    render() {

        return (
            <div>

                 <div className=" container ">
                    <div className={this.state.overlay+ " shadow" }>
                    <h1> {this.props.visited_place}</h1>
                    <div class="row">
                        <div class="col border-right">
                        <img src={this.state.photo} className="card-img-top  shadow cropped2" />
                        </div>
                        
                        <div class="col ">
                        {this.props.desciption}
                        </div>
                        <div class="col-3 border-left">
                        <a className={"btn btn-success checkoutButton shadow"} >check out</a>
                        
                    <a className={"btn btn-primary cancelButton "} onClick={()=>this.props.handeldisable(this.state.overlay)+this.handelShow()}>cancel</a>
                        </div>
                    </div>
                   

                    
                   
                    </div>

                    <div className=" cards" style={{width:"18em"}}>
                         
                        <div className="  shadow card-body">
                         <img src={this.state.photo} className="card-img-top cropped1" alt="..."/>
                            <h5 className="card-title">{this.props.city},{this.props.country}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <ul className="list-group list-group-flush">
                            <li className="list-group-item ">Price:{this.props.price}</li>
                            <li className="list-group-item ">Date:</li>
                            </ul>
                        
                            <a className={"btn btn-primary "+this.props.disable} onClick={()=>this.props.handeldisable(this.state.overlay)+this.handelShow()}>View Trip</a>
                           
                        </div>
                        
                    </div>


     






                 </div>   
            </div >
        )
    }

}