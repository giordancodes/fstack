import React, { Component } from 'react';
import firebase from 'firebase';

class Project extends Component {
	
  render(){
    let items = this.props.projects;
    return(
      <section className="single-project">
        { Object.keys(items).map((id, val) => {
            let currentUrl = this.state.currentUrl;
            let item = items[id];
            if(id === currentUrl){
              return(
                <div key={ id } >
                  <h2>{ item.title }</h2>
                  <h3>Current Time Logged: <span>{ item.time }</span></h3>
                  <div className="modify-time">
                    <h4>
                      <label htmlFor="startTimer">Start Timer? =<span>></span></label>
                    </h4>
                    <button className="primary"
                            id="startTimer" >
                      Go!
                    </button>
                  </div>
                </div>
              )
            }
        })}
      </section>
    )
  }

  componentDidMount(){
    this.setState({currentUrl: window.location.pathname.split('/')[2]});
  }
}

export default Project;