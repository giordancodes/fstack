import React, { Component } from 'react';
import firebase from 'firebase';
import { browserHistory } from 'react-router';

import './App.scss';
import './index.css';

class ProjectsList extends Component {
  constructor() {
    super();
    this.state={
      rename: false,
      newProjectName: ''
    }
  }
  render() {
    let items = this.props.projects;
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
                          className="liveText"
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
        <section  className="projects" 
                  onSubmit={ this.newProject } >
          <ul>
            <li>
              <form>
                <input  type="text" 
                        placeholder="new item..." 
                        onChange={ this.newProjectNameUpdate }
                        value={ this.state.newProjectName } 
                          />
                <button className="primary"
                        onSubmit={ this.newProject }
                >add new</button>
              </form>
            </li>
            { Object.keys(items).map((id, val) => {
            	let item = items[id];
              let userID = this.props.userID;
              // check for current user & that it's a project
            	if(item.userID === userID  && !item[val]){
	              return(
                  <div key={ id } >
                    <li>
                      <div>
                      	<span>
                          <a onClick={ () => this.chooseProject(id) } >{ item.title }</a>
                        </span>
                      </div>
                      <div>
                      	<span>{ item.time }</span>
                      	<button className="delete"
                      					onClick={ () => this.onDeleteProject(id) }
                      	>delete?</button>
                      </div>
                    </li>
                  </div>
                )
            	}
            })}
          </ul>
        </section>
      </div>
    );
  }

  componentDidMount(){
    let p = this.props.projectsName;
    this.firebaseRef = firebase.database().ref("projectList");
    this.setState({originalName: p});
  }

  chooseProject = (id) =>{
    let items = this.props.projects;
    let b = items[id]['time'];
    let c = items[id]['title'];
    this.props.setCurrentProjectTimeAndTitle(b, c, id);
    browserHistory.push(`/project/${id}`);
  }

  onUpdateProjects = (e) =>{
    this.updateProjects(e);
  }

  updateProjects = (e) =>{
    let n = this.state.newName;
    n = e.target.value;
    this.setState({newName: n});
  }

  showRename = () =>{
    this.setState({rename: true})
  }

  onRenameConfirm = (e) =>{
    e.preventDefault();
    let n = this.state.newName;
    if (n === undefined){
      alert("You entered nothing. What are you doing?");
    } else if (n.replace(/\s+/g, '') === ""){
       alert("That is not sufficient; think this one over.")
    } else {
      this.props.renameConfirm(n);
      this.setState({rename: false, newName: '', originalName: n});
    }
  }
    
  renameCancel = () =>{
    this.setState({rename: false, newName: ''});
  }

  newProjectNameUpdate = (e) =>{
    let newProjectName = this.state.newProjectName;
    newProjectName = e.target.value;
    this.setState({newProjectName});
  }

  newProject = (e) =>{
    e.preventDefault();

    let projects = this.props.projects;
    let userID = this.props.userID;
    let newProject = {
      title: this.state.newProjectName,
      time: 0,
      userID: userID
    }

    if (this.state.newProjectName !== ''){
      this.firebaseRef.push(newProject);
      this.setState({newProjectName: '', projects: projects})
    }
  }

  onDeleteProject = (id) =>{
  	this.props.deleteProject(id);
  }

}

export default ProjectsList;
