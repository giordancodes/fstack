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
      currentUser: null
    }
  }
  render() {
    if(!this.state.loggedIn){
      browserHistory.push('/login');
    }
    return (
      <div className="home wrapper">
        <header>
          <Link to='/'>projects</Link>
          <Link to='/login' onClick={ this.logout }>sign out</Link>
        </header>
        { React.cloneElement(this.props.children, 
          { renameConfirm: this.renameConfirm,
            projectsName: this.state.projectsName,
            updateProjects: this.updateProjects,

            firebaseRef: this.firebaseRef })}
        <footer>© 2016 <a href="http://giordan.ca">Giordan Battaglin</a> </footer>
      </div>
    );
  }

  componentDidMount(){
    this.firebaseRef = firebase.database().ref("projects");
    console.log(this.firebaseRef);
    firebase.auth().onAuthStateChanged((user) => {
      if (user){
        this.setState({ loggedIn:true, currentUser: user.displayName });
        browserHistory.push('/');
      } else {
        browserHistory.push('/login');
      }

      // this.firebase.push(test: 'test');
      // console.log(user.uid, this.firebaseRef)
    })
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

  // updateProjects = (e) =>{
  //   let n = this.props.projectsName;
  //   n = e.target.value;
  //   this.setState({projectsName: n})
  // }

  onUpdateProjects = (e) =>{
    this.updateProjects(e);
  }

  renameConfirm = (n) =>{
    this.setState({rename: false, projectsName: n })
  }
}

export default TimeTracker;
