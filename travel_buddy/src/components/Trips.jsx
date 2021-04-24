import React, { Component } from 'react';
import Trip from './Trip';


import Axios from "axios";
export default class trips extends Component {
    state = {
        trips: [],
        disable:""
    }
    componentDidMount() {
        Axios.get('http://localhost:8001/trips').then((response) => {
          this.setState({ trips: response.data })
        })
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
             {this.state.trips.slice(0, 8).map((trip) => (
             
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
            //  disable={this.state.disable}
             />
             
             )) } 
            
          
      
            </div >
        )
    }

}