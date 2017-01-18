import React, { Component } from 'react';
import firebase from 'firebase';
import { browserHistory } from 'react-router';

import IndividualProject from './IndividualProject';
import Rename from './Rename';

class ProjectsList extends Component {
  constructor() {
    super();
    this.state={
      rename: false,
      newProjectName: ''
    }
  }
  render() {
    return (
      <div className="projects-list">
        <h1>{ this.props.projectsName } List</h1>
        
        <Rename showRename={ this.showRename }
                originalName={ this.state.originalName }
                updateProjects={ this.updateProjects }
                onRenameConfirm={ this.onRenameConfirm }
                renameConfirm={ this.props.renameConfirm }
                rename={ this.state.rename }
                renameCancel={ this.renameCancel } />

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
                <div>
                  <button className="primary"
                          onSubmit={ this.newProject }
                  >add new</button>
                </div>
              </form>
            </li>
            <IndividualProject  chooseProject={ this.chooseProject }
                                toHHMMSS={ this.props.toHHMMSS }
                                projects={ this.props.projects }
                                onDeleteProject={ this.onDeleteProject } />
          </ul>
        </section>
      </div>
    );
  }

  componentDidMount(){
    let p = this.props.projectsName;
    this.firebaseRef = firebase.database().ref("projectList");
    this.setState({originalName: p});
    if(!this.props.currentUser && this.props.userID){
      location.reload();
    }
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
      alert("Nothing entered. Please try again.");
    } else if (n.replace(/\s+/g, '') === ""){
       alert("That is not sufficient; please try again.")
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

    let userID = this.props.userID;
    let projects = this.props.projects[userID];
    let newProject = {
      title: this.state.newProjectName,
      time: 0,
      userID: userID
    }

    if (this.state.newProjectName !== ''){
      this.firebaseRef.child(userID).push(newProject);
      this.setState({newProjectName: '', projects: projects})
      window.scrollTo(0,document.body.scrollHeight);
    }
  }

  onDeleteProject = (id) =>{
  	this.props.deleteProject(id);
  }

}

export default ProjectsList;
