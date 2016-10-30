import React, { Component } from 'react';
import firebase from 'firebase';
import $ from 'jquery';

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
          <label  htmlFor="rename-input"
                  onClick={ this.showRename }
                  >change </label> 
          <input  type="text"
                  id="rename-input" 
                  value={ this.props.projectsName }
                  onChange={ this.onUpdateProjects } /> 
          <label  htmlFor="rename-input"
                  onClick={ this.showRename }
                  >name?</label>
        </section>
      </div>
    );
  }

  componentDidMount(){
    $('#rename-input').hide();
    
  }

  onUpdateProjects = (e) =>{
    this.props.updateProjects(e);
  }

  showRename = () =>{
    $('#rename-input').show();
  }

}

export default ProjectsList;
