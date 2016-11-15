import React, { Component } from 'react';
import firebase from 'firebase';
import { browserHistory, Link } from 'react-router';

import './index.css';
import './App.scss';

class TimeTracker extends Component {
  constructor() {
    super();
    this.state={
      projectsName: "Projects",
      loggedIn: true,
      currentUser: null,
      projects: [
        {title: 'graveyard shift', time: 42, author: null},
        {title: 'some wordpress stuff', time: 420, author: null}
      ]
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
    let currentUser = this.state.currentUser;
    this.firebaseRef = firebase.database().ref("projectList");
    console.log(this.firebaseRef);
    firebase.auth().onAuthStateChanged((user) => {
      if (user){
        this.setState({ loggedIn: true, currentUser: user.displayName, userID: user.uid });
        console.log(user, user.uid);
      } else {
        browserHistory.push('/login');
      }
    });

    this.firebaseRef.on("child_added", (dataSnapshot) =>{
      
      let projects = this.state.projects;
      projects[dataSnapshot.key] = dataSnapshot.val();

      this.setState({projects});
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
    // this.firebaseRef.push({projectsName: n});
    console.log(this.firebaseRef);
    this.setState({rename: false, projectsName: n });
  }
}

export default TimeTracker;
