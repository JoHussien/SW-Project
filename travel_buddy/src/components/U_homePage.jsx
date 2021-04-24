import React, { Component } from 'react';
import Nav from './navbar';
import Im from './travell.jpeg'
import Trips from './trips';
export default class homepage extends Component {
 
 

 
    render() {

        return (
            <div>
                     <Nav
                    user_lname={this.props.user_lname}
                    user_fname={this.props.user_fname}
                    />
                    <img src={Im} alt="Travel made easy" class ="responsive-image" ></img>
                    <div class="shadow-lg p-3 mb-5 bg-body rounded text-center"> Let's Take you all over Egypt!</div>
                    <Trips/>
            </div>
        )
    }

}