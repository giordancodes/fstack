import React, { Component } from 'react';
import firebase from 'firebase';
import { browserHistory, Link } from 'react-router';

import './index.css';
import './App.scss';

class TimeTracker extends Component {
  constructor() {
    super();
    this.state={
      loggedIn: true,
      currentUser: null,
      projects: {}
    }
  }
  render() {
    if(!this.state.loggedIn){
      browserHistory.push('/login');
    }
    return (
      <div>
        <nav className="home">
          <Link to='/'>projects</Link>
          <Link to='/login' onClick={ this.logout }>sign out</Link>
        </nav>
        <div className="home wrapper">
          <header>
            <p>Hello, { this.state.currentUser }. </p>
          </header>
          { React.cloneElement(this.props.children, 
            { renameConfirm: this.renameConfirm,
              projectsName: this.state.projectsName,
              projects: this.state.projects,
              currentUser: this.state.currentUser,
              loggedIn: this.state.loggedIn,
              userID: this.state.userID,
              deleteProject: this.deleteProject,
              updateTime: this.updateTime,
              singleProjectUrl: this.singleProjectUrl,
              projectUrl: this.state.projectUrl,
              currentProjectTime: this.state.currentProjectTime,
              firebaseRef: this.firebaseRef })}
          <footer>© 2016 <a href="http://giordan.ca">Giordan Battaglin</a> </footer>
        </div>
      </div>
    );
  }

  componentDidMount(){
    this.firebaseRef = firebase.database().ref("projectList");

    firebase.auth().onAuthStateChanged((user) => {
      if (user){
        this.setState({ loggedIn: true, currentUser: user.displayName, userID: user.uid });
      } else {
        browserHistory.push('/login');
      }
    });

    this.firebaseRef.on("child_added", (dataSnapshot) =>{
      let projects = this.state.projects;
      projects[dataSnapshot.key] = dataSnapshot.val();
      Object.keys(projects).map((id) =>{
        if (id === 'projectsName'){
          return this.setState({projectsName: projects[id]});
        }
      });
      this.setState({projects});
    });

    this.firebaseRef.on("child_removed", (dataSnapshot) =>{
      let projects = this.state.projects;
      delete projects[dataSnapshot.key];

      this.setState({projects});
    });
  }

  logout = () =>{
    if(confirm("Would you care to sign out?")){
      firebase.auth().signOut();
      this.setState({loggedIn: false});
    }
  }

  onUpdateProjects = (e) =>{
    this.updateProjects(e);
  }

  renameConfirm = (n) =>{
    this.firebaseRef.update({ projectsName: n });
    this.setState({rename: false, projectsName: n });
  }

  deleteProject = (id) =>{
    if(confirm("Destroy item?")){
      this.firebaseRef.child(id).remove();
    }
  }

  updateTime = (e) =>{
    let t = this.state.currentProjectTime;
    let p = this.state.projects;
    let url = this.state.currentUrl;
    t = e.target.value;
    this.setState({currentProjectTime: t});
  }

  singleProjectUrl = (url) =>{
    let projectUrl = this.state.projectUrl;
    let items = this.state.projects;
    // console.log(items, url, items[url]);
    this.setState({projectUrl: url},
      () => {
        // console.log(items, url, items[url]);
      }
    );
  }
}

export default TimeTracker;
