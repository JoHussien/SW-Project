import React, { Component } from 'react';

export default class trips extends Component {
    state = {
        trips: false,

    }
    //getting dat
    componentDidMount() {
        Axios.get('http://localhost:8001/trips').then((response) => {
          this.setState({ trips: response.data })
        })
    }

    render() {

        return (
            <div>
                    {/*html code */}
                     {/* A button for rating */}
                     {/* call a function to rate the company */}
                    {/* then switch to a rate page */}
                    
            </div >
        )
    }

}