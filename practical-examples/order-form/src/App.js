import React, { Component } from 'react';

import Service from './Service';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.addTotal = this.addTotal.bind(this);
    this.state = {
      total: 0,
      services: [
        { name: 'Web Development', price: 300 },
        { name: 'Design', price: 400 },
        { name: 'Integration', price: 250 },
        { name: 'Training', price: 220 }
      ]
    }
  }
  addTotal(price){
    this.setState({ total: this.state.total + price })
  }

  render(){
    const component = this;
    console.log(this);
    const services = this.state.services.map( (s) =>{
      return(
        <Service
          name={ s.name }
          price={ s.price }
          active={ s.active }
          addTotal={ component.addTotal }
        />
      )
    });

    return (
      <div>
        <h1>Les Services</h1>
        <div>
          <p id="total">Total <b>${ this.state.total.toFixed(2) }</b> </p>
        </div>
      </div>
    )

  }
}

export default App;
