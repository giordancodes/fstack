import React, { Component } from 'react';
import firebase from 'firebase';
import { browserHistory } from 'react-router';

import './App.scss';
import './index.css';

class Project extends Component {
	
  render(){
    return(
      <div>
        <h1>hola</h1>
      </div>
    )
  }

  componentDidMount(){
    this.getUrl();
  }

  getUrl = () =>{
    let currentUrl = window.location.pathname.split('/')[2];
    this.setState({currentUrl});
    console.log(this.props.projects);
  }

  currentProject = () =>{

  }
}

export default Project;