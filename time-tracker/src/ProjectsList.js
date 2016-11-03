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
            <form onSubmit={ this.onRenameConfirm }>
              <label  htmlFor="rename-input"
                      onClick={ this.showRename }
                      >change</label> 
              { this.state.rename ?
                  <input  type="text"
                          id="rename-input" 
                          placeholder={ this.state.originalName }
                          onChange={ this.updateProjects } /> 
              : null 
              }
              <label  htmlFor="rename-input"
                    onClick={ this.showRename }
                    >name?</label>
            </form>
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
    n = e.target.value;
    this.setState({newName: n})
  }

  showRename = () =>{
    this.setState({rename: true})
  }

  onRenameConfirm = (e) =>{
    e.preventDefault();
    let n = this.state.newName;
    // let str = n.replace(/\s+/g, '');
    // console.log(n, str);
    if (n === undefined){
      alert("You entered nothing. What are you doing?");
    } else if (n.replace(/\s+/g, '') === ""){
       alert("That is not sufficient. Think this one over.")
    } else {
      this.props.renameConfirm(n);
      this.setState({rename: false, newName: ''});
    }
  }
    
  

  renameCancel = () =>{
    this.setState({rename: false, newName: ''});
  }

}

export default ProjectsList;
