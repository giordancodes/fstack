import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      form: {
        name: '',
        email: '',
        colour: '',
        gender: ''
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>multi-input</h1>
        </div>
        <form onSubmit={ (e) => e.preventDefault() }>
          <input name='name' value={ this.state.form.name } onChange={ this.updateField } type="text"/>Name
          <input name='email' value={ this.state.form.email } onChange={ this.updateField } type="text"/>Email
          <input name='colour' value={ this.state.form.colour } onChange={ this.updateField } type="text"/>Fav Colour
          <select name='gender' value={ this.state.form.gender } onChange={ this.updateField } >
            <option>Femme</option>
            <option>Homme</option>
            <option>Autre</option>
          </select>
        </form>
      </div>
    );
  }

  updateField = (e) => {
    console.log(e.target.name);
    let form = this.state.form;

    form[e.target.name] = e.target.value;
    this.setState({form});
  }

}

export default App;