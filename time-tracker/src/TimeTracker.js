import React, { Component } from 'react';
import firebase from 'firebase';
import { browserHistory, Link } from 'react-router';

import './App.scss';
import './index.css';

class TimeTracker extends Component {
  constructor() {
    super();
    this.state={
      projectsName: "Projects"
    }
  }
  render() {
    return (
      <div className="home wrapper">
        <header>
          <Link to='/'>projects</Link>
        </header>
        { React.cloneElement(this.props.children, { projectsName: this.state.projectsName,
          updateProjects: this.updateProjects })}
      </div>
    );
  }

  componentDidMount(){

  }

  updateProjects = (e) =>{
    let n = this.props.projectsName;
    n = e.target.value;
    this.setState({projectsName: n})
  }

  onUpdateProjects = (e) =>{
    this.updateProjects(e);
  }

}

export default TimeTracker;
