import React, { Component } from 'react';
import Andrew from './Andrew.JPG'
import Salma from './Salma.jpeg'
import JO from './Youssef.jpeg'
import AK from './Akram.png'
import Bas from './Basouny.jpg'

export default class footer extends Component {
    render() {
        return (
            <div className="footer bg-secondary">

                <div className="container">
                    <div className="row mt-5">
                        <div className="text-start col-3 shadow ">
                      
                            <div className="fs-4 text-captalize text-info "> We are featured in </div>
                            
                            <div className="">Alex</div>
                            <div>Hurdgha</div>
                            <div>Dahab</div>
                            <div>Sharm El Sheik</div>
                            <div> </div>
                            
                        </div>
                        <div className="text-start col-3 shadow">
                        
                            <div className="fs-4 text-captalize text-info"> General: </div>
                            <a className="d-block text-decoration-none text-light">terms and conditions</a>
                            <a className="d-block text-decoration-none text-light">Become a Partner</a>
                            <a className="d-block text-decoration-none text-light">Rewards Programs Terms and Conditions</a>
                            <div> </div>
                        
                        </div>
                        <div className="text-start col-3 shadow">
                        
                            <div className="fs-4 text-captalize opacityzero"> General: </div>
                            <a className="d-block text-decoration-none text-light">Why book with Travel Buddy</a>
                            <a className="d-block text-decoration-none text-light"> FAQ</a>
                            <a className="d-block text-decoration-none text-light">Privacy Policy</a>
                            <div> </div>
                    
                        </div>
                        <div className="text-start col-3 shadow">
                        
                            <div className="fs-4 text-captalize opacityzero"> General: </div>
                            <a className="d-block text-decoration-none text-light">Responsible Travel </a>
                            <a className="d-block text-decoration-none text-light">Vision and Mission</a>
                            <a className="d-block text-decoration-none text-light">Terms of use</a>
                            <div> </div>
                
                      </div>
                    </div>
                    <div className=" mt-5 mb-5  border-bottom"></div>

                      <div className="fs-4 text-info fw-light">This website is created by a group of undergraduate students at AUC for the Software Engineering Course Project</div> 
                        {/* contacts: */}
                        {/* <div className="row fs-5">
                            
                        </div> */}
                        <div className="fs-5 FloatLeft">
                      
                            <div className="">Andrew Nady </div> 
                                <img src={Andrew} className="photo "/> 
                            </div>
                            <div className="FloatLeft">
                                <div>Salma Soliman</div> 
                                <img src={Salma} className="photo "/> 
                            </div>
                            <div className="FloatLeft">
                               <div>Akram Aziz</div> 
                               <img src={AK} className="photo"/> 
                             </div>

                            <div className="FloatLeft">
                               <div>youssef Hussien</div> 
                               <img src={JO} className="photo "/> 
                            </div>
                            <div className="FloatLeft">
                               <div>Abd ElRahman Basouny</div> 
                               <img src={Bas} className="photo "/> 
                            </div>
                            
                            
                       
                       
                    
                         
                    </div>
                    
            </div>
        );
    }
}