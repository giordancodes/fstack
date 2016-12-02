import React, { Component } from 'react';
import firebase from 'firebase';
class Project extends Component {

  constructor(){
    super();
    this.state={
      modifyTime: false
    }
  }
	
  render(){
    let p = this.props.projectUrl;
    let items = this.props.projects;
    return(
      <section className="single-project">
        <h1>{ this.state.currentProjectTitle }</h1>
        <h2>current time logged: { this.state.currentProjectTime } </h2>
        <div className="modify-time">
          <button className="primary">
            start time?
          </button>
          <button className="primary"
                  onClick={ this.timeEdit } >
            change time?
          </button>
        </div>
        { this.state.modifyTime ?
          <div className="editing-time">
            <input  type="number" 
                    value={ this.state.currentProjectTime } />
            <button className="primary finish"
                    onClick={ this.timeEdit } >
              finish?
            </button>
            <button className="primary cancel"
                    onClick={ this.timeEdit } >
              cancel?
            </button>
          </div>
          : null
        }
      </section>
    )
  }

  componentWillMount(){
    this.props.singleProjectUrl(window.location.pathname.split('/')[2]);
  }

  componentWillReceiveProps() {
  }

  componentDidMount() {    

    let p = this.props.projectUrl;
    let items = this.props.projects;
    console.log(items[p], p, items);
    // if (items[p] !== undefined){
    //   this.setState({ currentProjectTitle: items[p]['title'], currentProjectTime: items[p]['time'] });
    // }
    if (items[p] !== undefined){
      // this.props.setCurrentProjectTimeAndTitle(items[p]['time'], items[p]['title'])
      // this.props.setCurrentProjectTimeAndTitle(42, 'some')
    }
  }

  timeEdit = () =>{
    let m = this.state.modifyTime;
    m = !m;
    this.setState({modifyTime: m});
  }

  onUpdateTime = (e) =>{
    let t = this.state.newTime;
    t = e.target.value;
    this.props.updateTime(t);
    this.setState({newTime: t});
  }

  onSetCurrentProjectTimeAndTitle = (x, y) =>{
    let b = this.state.propsProjectTime;
    let c = this.state.propsProjectTitle;
    this.props.setCurrentProjectTimeAndTitle(b, c);
  }

}

export default Project;