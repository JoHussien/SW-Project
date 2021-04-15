import React, { Component } from 'react';

import Trip from './Trip';
export default class trips extends Component {
    state = {
        trips: false,

    }


    render() {

        return (
            <div>
             <Trip/>
            </div >
        )
    }

}