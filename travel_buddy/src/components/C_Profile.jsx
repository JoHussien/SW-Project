import React, { Component } from 'react';
import Rates from './rate';
export default class comapny extends Component {
    state = {
        appear: false,

    }

    componentDidMount() {
        Axios.get('http://localhost:8001/company').then((response) => {
            this.setState({ companys: response.data })
          })
    }
 //insert a new trip in the trip table 
 //modify a trip
 //
    render() {

        return (
            <div>
                    {/*html code */}
                    {/* rates may appear here */}
                
            </div >
        )
    }

}