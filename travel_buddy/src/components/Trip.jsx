import React, { Component } from 'react';
import Im from './travell.jpeg'

export default class trips extends Component {

    //getting dat
    // componentDidMount() {
    //     Axios.get('http://localhost:8001/trips').then((response) => {
    //       this.setState({ trips: response.data })
    //     })
    // }

    render() {

        return (
            <div>

                 <div class="container">

                    <div class="cards" style={{width:"18em"}}>
                         <img src={Im} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            
                            <h5 class="card-title">ALEX</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item">Price:</li>
                            <li class="list-group-item">Date:</li>
                            </ul>
                        
                            <a href="#" class="btn btn-primary">View Trip</a>
                        </div>
                    </div>


                    <div class="cards" style={{width:"18em"}}>
                            <img src={Im} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">DAHAB</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <ul class="list-group list-group-flush">
                                <li class="list-group-item">Price:</li>
                                <li class="list-group-item">Date:</li>
                                </ul>
                            
                                <a href="#" class="btn btn-primary">View Trip</a>
                            </div>
                    </div>
                    <div class="cards" style={{width:"18em"}}>
                         <img src={Im} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            
                            <h5 class="card-title">ALEX</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item">Price:</li>
                            <li class="list-group-item">Date:</li>
                            </ul>
                        
                            <a href="#" class="btn btn-primary">View Trip</a>
                        </div>
                    </div>


                    <div class="cards" style={{width:"18em"}}>
                            <img src={Im} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">DAHAB</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <ul class="list-group list-group-flush">
                                <li class="list-group-item">Price:</li>
                                <li class="list-group-item">Date:</li>
                                </ul>
                            
                                <a href="#" class="btn btn-primary">View Trip</a>
                            </div>
                    </div>
                    <div class="cards" style={{width:"18em"}}>
                         <img src={Im} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            
                            <h5 class="card-title">ALEX</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item">Price:</li>
                            <li class="list-group-item">Date:</li>
                            </ul>
                        
                            <a href="#" class="btn btn-primary">View Trip</a>
                        </div>
                    </div>


                    <div class="cards" style={{width:"18em"}}>
                            <img src={Im} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">DAHAB</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <ul class="list-group list-group-flush">
                                <li class="list-group-item">Price:</li>
                                <li class="list-group-item">Date:</li>
                                </ul>
                            
                                <a href="#" class="btn btn-primary">View Trip</a>
                            </div>
                    </div>


                 </div>   
            </div >
        )
    }

}