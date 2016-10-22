import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.clicked = this.clicked.bind(this);
    this.state = {
      focused: null
    }
  }

  clicked(i){
    this.setState({ focused: i });
  }

  render() {
    
    const component = this;
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            <code>nav-menu.js</code>
          </h2>
        </div>
        <ul>
          { this.props.items.map( (m, i) =>{
            
            var style = '';

            if(component.state.focused == i){
              style = 'focused';
            }
            return <li key={ i } className={ style } onClick={ component.clicked.bind(component, i)}>{m}</li>; 
             })
            }
          
        </ul>
        <p>Selected: { this.props.items[this.state.focused] } </p>
      </div>
    );
  }
}

export default App;
