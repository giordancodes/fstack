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
    this.setState({currentUrl: window.location.pathname.split('/')[2]});
  }

  currentProject = () =>{
    let projects = this.props.projects;
    // let currentUrl = this.state.currentUrl;
    Object.keys(projects).map((id) =>{
      // if ()
      console.log('**', projects, projects[id], id);
    })
    console.log(projects);
  }
}

export default Project;