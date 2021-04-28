import React, { Component } from 'react';
import Trip from './Trip';


import Axios from "axios";
export default class trips extends Component {
    state = {
    
    
        disable:""
    }

    handeldisable=(overlay)=>{
        if(overlay=="d-none")
            {
                
                this.setState({disable:"disabled"})
            }
        else
            this.setState({disable:""})
    
    
    }
    render() {

        return (
            <div>
             {this.props.trips.slice(0, 8).map((trip) => (
             
          <Trip
             city={trip.city}
             country={trip.country}
             price={trip.price}
             comp_mail={trip.mail}
             desciption={trip.descri}
             visited_place={trip.visited_place}
             id={trip.trip_id}

             days={trip.days}
             hours={trip.hours}

             handeldisable={this.handeldisable}
             Upage={this.props.Upage}
             handelRate_appear={this.props.handelRate_appear}
             handelCheckOut={this.props.handelCheckOut}
            //  disable={this.state.disable}
             />
             
             )) } 
            
          
      
            </div >
        )
    }

}