import React, { Component } from 'react';
import firebase from 'firebase';

import './App.scss';
import './index.css';

class ProjectsList extends Component {
  constructor() {
    super();
    this.state={
      rename: false
    }
  }
  render() {
    return (
      <div className="projects-list wrapper">
        <h1>{ this.props.projectsName } List</h1>
        <section id="renameProjects">
          <div>
            <label  htmlFor="rename-input"
                    onClick={ this.showRename }
                    >change</label> 
            { this.state.rename ?
              <input  type="text"
                      id="rename-input" 
                      placeholder={ this.state.originalName }
                      onChange={ this.updateProjects } 
                      onSubmit={ this.props.renameConfirm } /> 
              : null 
            }
            <label  htmlFor="rename-input"
                    onClick={ this.showRename }
                    >name?</label>
          </div>
          { this.state.rename ?
            <div>
              <button onClick={ this.onRenameConfirm }
                      className="secondary"
                      id="renameProjectsButton" >
                <code>confirm</code>
              </button>
              <button onClick={ this.renameCancel }
                      className="secondary"
                      id="cancelRenameProjectsButton" >
                <code>cancel</code>
              </button>
            </div> 
            : null
          }
        </section>
      </div>
    );
  }

  componentDidMount(){
    let p = this.props.projectsName;
    this.setState({originalName: p})
  }

  onUpdateProjects = (e) =>{
    this.updateProjects(e);
  }

  updateProjects = (e) =>{
    let n = this.state.newName;
    console.log(n);
    n = e.target.value;
    this.setState({newName: n})
  }

  showRename = () =>{
    this.setState({rename: true})
  }

  onRenameConfirm = (e) =>{
    let n = this.state.newName;
    this.props.renameConfirm(n);
  }

  renameCancel = () =>{
    this.setState({rename: false, newName: ''});
  }

}

export default ProjectsList;
