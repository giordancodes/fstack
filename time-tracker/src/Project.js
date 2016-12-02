import React, { Component } from 'react';
import firebase from 'firebase';
class Project extends Component {
	
  render(){
    let p = this.props.projectUrl;
    let items = this.props.projects;
    // console.log(p, items, items[p]);
    return(
      <section className="single-project">
        <h1>{ this.state.currentProjectTitle }</h1>
        <h2>current time logged: { this.state.currentProjectTime } </h2>
        
        {/* Object.keys(items).map((id, val) => {
            let item = items[projectUrl];
            if(id === projectUrl){
              this.setState({newTime: item.time});
              let t = this.state.newTime;
              return(
                <div key={ id } >
                  <h2>{ item.title }</h2>
                  <h3>Current Time Logged: <span>{ t }</span></h3>
                  <hr/>
                  <div className="modify-time">
                    <h4>
                      <label htmlFor="startTimer">Start Timer? =<span>></span></label>
                    </h4>
                    <button className="primary"
                            id="startTimer" >
                      Go!
                    </button>
                  </div>
                  <div className="modify-time">
                    <h4>
                      <label htmlFor="modifyTime">Modify Current Time? =<span>></span></label>
                    </h4>
                    <input  type="number" 
                            id="modifyTime"
                            className="liveText"
                            value={ t } />
                  </div>
                </div>
              )
            }
        })*/}
      </section>
    )
  }

  componentWillMount(){
    this.setState({currentUrl: window.location.pathname.split('/')[2]}, 
      () => {
        let c = this.state.currentUrl;
        let items = this.props.projects;
        this.props.singleProjectUrl(c);
      }
    );
  }
  componentWillReceiveProps() {
    let p = this.props.projectUrl;
    let items = this.props.projects;
    if (items[p] !== undefined){
      this.setState({ currentProjectTitle: items[p]['title'], currentProjectTime: items[p]['time'] })
    }
  }

  onUpdateTime = (e) =>{
    let t = this.state.newTime;
    t = e.target.value;
    this.props.updateTime(t);
    this.setState({newTime: t});
  }

}

export default Project;