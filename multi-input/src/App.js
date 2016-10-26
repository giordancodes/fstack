import React, { Component } from 'react';

import Footer from './Footer';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
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
          <div>
            <input name='name' value={ this.state.form.name } onChange={ this.updateField } type="text"/></div>
            <label htmlFor="name">Name</label>
          <div>
            <input name='email' value={ this.state.form.email } onChange={ this.updateField } type="text"/></div>
            <label htmlFor="email">Electronic Mail Address</label>
          <div>
            <input name='colour' value={ this.state.form.colour } onChange={ this.updateField } type="text"/></div>
            <label htmlFor="colour">Shoe Colour</label>
          <div>
            <select name='gender' value={ this.state.form.gender } onChange={ this.updateField } >
              <option>Femme</option>
              <option>Homme</option>
              <option>Autre</option>
            </select>
            <label htmlFor="gender">Gender</label>         
          </div>
        </form>
        <Footer />
      </div>
    );
  }

  updateField = (e) => {
    let form = this.state.form;

    form[e.target.name] = e.target.value;
    this.setState({form});
  }

}

export default App;