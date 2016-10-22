import React, { Component } from 'react';
import logo from './logo.svg';

class Service extends Component {
  constructor(){
    super();
    this.state = {
      active: false
    }
  }
 services: [
        { name: 'Web Development', price: 300 },
        { name: 'Design', price: 400 },
        { name: 'Integration', price: 250 },
        { name: 'Training', price: 220 }
      ];

  clickHandler(){
    const active = !this.state.active;

    this.setState({ active });
    this.props.addTotal( active ? this.props.price : - this.props.price );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            <code>order-form.js</code>
          </h2>
        </div>
        
        <div>
          <p  className={ this.state.active ? 'active' : '' }
              onClick={ this.clickHandler }>
              { this.props.name } <b>$ { this.props.price.toFixed(2) } </b>
            
          </p>
        </div>

      </div>
    );
  }
}

export default Service;