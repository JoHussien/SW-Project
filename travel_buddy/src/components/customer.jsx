import React, { Component } from 'react';

export default class customer extends Component {
    state = {
        appear: false,

    }
    componentDidMount() {
        Axios.get('http://localhost:8001/users').then((response) => {
            this.setState({ Users: response.data })
          })
    }
 
  //insert a reservation to 
    render() {

        return (
            <div>
                    {/*html code */}
                   
               
            </div >
        )
    }

}