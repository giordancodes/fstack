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
      <div className="home wrapper">
        <nav>
          <Link to='/'>projects</Link>
          <Link to='/login' onClick={ this.logout }>sign out</Link>
        </nav>
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
            firebaseRef: this.firebaseRef })}
        <footer>© 2016 <a href="http://giordan.ca">Giordan Battaglin</a> </footer>
      </div>
    );
  }

  componentDidMount(){
    this.firebaseRef = firebase.database().ref("projectList");

    firebase.auth().onAuthStateChanged((user) => {
      if (user){
        this.setState({ loggedIn: true, currentUser: user.displayName, userID: user.uid });
        // console.log(user, user.uid);
      } else {
        browserHistory.push('/login');
      }
    
    // let uID = this.state.userID;
    });

    this.firebaseRef.on("child_added", (dataSnapshot) =>{
      let projects = this.state.projects;
      let projectsName = projects[projectsName];
      projects[dataSnapshot.key] = dataSnapshot.val();
      // console.log(projects, projectsName);
      this.setState({projects, projectsName: projectsName});
    });

    this.firebaseRef.on("child_removed", (dataSnapshot) =>{
      let projects = this.state.projects;
      delete projects[dataSnapshot.key];

      this.setState({projects});
    });

  }

  logout = () =>{
    // let popup = confirm("Would you care to sign out?");
    // if (popup === true){
      firebase.auth().signOut();
      this.setState({loggedIn: false})
    // }else{
      // browserHistory.push('/');
    // }
  }

  onUpdateProjects = (e) =>{
    this.updateProjects(e);
  }

  renameConfirm = (n) =>{
    this.firebaseRef.update({projectsName: n});
    this.setState({rename: false, projectsName: n });
  }
}

export default TimeTracker;
