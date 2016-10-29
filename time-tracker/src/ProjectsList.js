import React, { Component } from 'react';

import './App.scss';
import './index.css';

class ProjectsList extends Component {
  constructor() {
    super();
    this.state={ 
    }
  }
  render() {
    return (
      <div className="projects-list wrapper">
        <h1>{ this.props.projectsName } List</h1>
        <section id="renameProjects">
          <label htmlFor="rename-input">change</label> 
          <input  type="text"
                  id="rename-input" 
                  value={ this.props.projectsName }
                  onChange={ this.onUpdateProjects } /> 
          <label htmlFor="rename-input">name?</label>
        </section>
      </div>
    );
  }

  onUpdateProjects = (e) =>{
    this.props.updateProjects(e);
  }

}

export default ProjectsList;
