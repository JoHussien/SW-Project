import React, { Component } from "react";
// import Im from './logo.jpeg'
export default class navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" onClick={this.props.userHomepagetoggle} style={{cursor: "pointer"}}>Travel Buddy</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active"  aria-current="page" onClick={this.props.userHomepagetoggle} style={{cursor: "pointer"}}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={this.props.userPagetoggle} style={{cursor: "pointer"}}>Profile</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Language 
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">English</a></li>
                  <li><a className="dropdown-item" href="#">Arabic</a></li>
                  <li><hr className="dropdown-divider"/></li>
                </ul>
              </li>
              
             <li className="nav-item dropdown">
            
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Menu 
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="#">Booking Overview</a></li>
                      <li><a className="dropdown-item" href="#">Help and Support</a></li>
                      <li><a className="dropdown-item" href="#">Viewed Recently</a></li>
                      <li><hr className="dropdown-divider"/></li>
                    </ul>
                  </li>


            </ul>
           
            <div className="d-flex">
            <div className="text-capitalize text-light">{this.props.user_fname} {this.props.user_lname}</div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div className="fas fa-user-alt fs-2 text-light"></div>
            </div>

          </div>
        </div>
      </nav>
      </div>
    );
  }
}
