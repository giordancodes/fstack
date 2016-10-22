import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      searchString: '',
      libraries:  [
          { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
          { name: 'AngularJS', url: 'https://angularjs.org/'},
          { name: 'jQuery', url: 'http://jquery.com/'},
          { name: 'Prototype', url: 'http://www.prototypejs.org/'},
          { name: 'React', url: 'http://facebook.github.io/react/'},
          { name: 'Ember', url: 'http://emberjs.com/'},
          { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
          { name: 'Dojo', url: 'http://dojotoolkit.org/'},
          { name: 'Mootools', url: 'http://mootools.net/'},
          { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
          { name: 'Lodash', url: 'http://lodash.com/'},
          { name: 'Moment', url: 'http://momentjs.com/'},
          { name: 'Express', url: 'http://expressjs.com/'},
          { name: 'Koa', url: 'http://koajs.com/'}
      ]
    }
  }

  handleChange(e){
    this.setState({ searchString: e.target.value });
  }

  render() {
    var   libs = this.state.libraries,
          searchString = this.state.searchString.trim().toLowerCase();

    if(searchString.length > 0){
      libs = libs.filter( (l) => {
        return l.name.toLowerCase().match( searchString );
      })
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            <code>real-time-search.js</code>
          </h2>
        </div>
        
        <div>
          <input 
            type="text"
            value={ this.state.searchString }
            onChange={ this.handleChange }
            placeholder="Type, Monkey!"
          />
          <ul>
            {libs.map( (l, i)=>{
              return(
                <li key={i} > {l.name} <a href={l.url}>{l.url}</a> </li>
              )
            } )}
          </ul>  
        </div>
        


      </div>
    );
  }
}

export default App;
