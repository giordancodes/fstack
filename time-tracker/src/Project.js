import React, { Component } from 'react';
import firebase from 'firebase';
import Timer from './Timer';
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
        <Timer />
      </section>
    )
  }

  componentWillMount(){
    let url = window.location.pathname.split('/')[2];
    this.props.singleProjectUrl(url);
    let items = this.props.projects;
    // console.log(items, url, items.url);
  }

  componentWillReceiveProps(nextProps) {
    let url = this.props.projectUrl;
    let items = this.props.projects;
    if (url !== nextProps.projectUrl && nextProps.projectUrl !== typeof 'undefined' && typeof nextProps.projects !== 'undefined' ){
      // console.log(nextProps.projectUrl);
    // this.setState({ currentProjectTitle: items[url]['title'], currentProjectTime: items[url]['time'] });
      console.log('string update');
      console.log({
        url: nextProps.projectUrl,
        projectList: nextProps.projects,
        current: nextProps.projects[nextProps.projectUrl]
      })
      // this.props.setCurrentProjectTimeAndTitle(nextProps.projects[nextProps.projectUrl]['time'], nextProps.projects[nextProps.projectUrl]['title'])
    }
    // console.log(url, items, items[url]);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   let url = window.location.pathname.split('/')[2];
  //   let items = this.props.projects;
  //   // console.log(items, url, items[url]);
  //   return nextProps.projectUrl !== this.props.projectUrl;
  //   // return items[url] !== this.props.;
  // }

  componentDidUpdate(prevProps, prevState) {
    
  }

  componentDidMount() {
    // console.log(this.props.projectUrl);

    // if (items[p] !== undefined){
    // }
    // if (items[p] !== undefined){
      // this.props.setCurrentProjectTimeAndTitle(items[p]['time'], items[p]['title'])
    // }
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