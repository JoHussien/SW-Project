import React, { Component } from 'react';
import Company from './company';
import Customer from './customer';
export default class userProfile extends Component { 
    render() {

        return (
            <div>
                    {/*html code */}
                    <Company/>
                    <Customer/>
            </div >
        )
    }

}