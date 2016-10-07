var React = require('react');

var ThumbnailImage = require('./thumbnailImage');
var ActiveImage = require('./activeImage');

var App = React.createClass({
  getInitialState: function() {
    return {
      images: [
        "images/cat1.jpg",
        "images/cat2.jpg",
        "images/cat3.jpg",
        "images/cat4.jpg",
        "images/cat5.jpg",
        "images/cat6.jpg",
        "images/cat7.jpg",
        "images/cat8.jpg",
        "images/cat9.jpg",
        "images/cat10.jpg"
      ],
      activeImage: null
    }
  },

  render: function() {
    var component = this;

    return <div className='container'>
      { this.state.activeImage !== null ?
        <ActiveImage image={this.state.images[this.state.activeImage]}
                     onClose={ this.deselectCat }/> :
        null
      }

      <div className='thumbnails'>
        { this.state.images.map(function(image, i) {
          return <ThumbnailImage key={ i } image={ image }
              onSelect={ component.catSelected.bind(component, i) } />
        })}
      </div>
    </div>;
  },

  catSelected: function(i) {
    console.log("cat selected!", i);
    this.setState({ activeImage: i });
  },

  deselectCat: function() {
    this.setState({ activeImage: null });
  }
});

module.exports = App;

//import React, { Component } from 'react';
//import './App.css';
////import { CatSelected } from './catSelected';
//import { ThumbnailImage } from './thumbnailImage';
//import { ActiveImage } from './activeImage';
////import { DeselectCat } from './deselectCat';
//
//class App extends Component {
//	
//	constructor(props){
//		super(props);
//		this.state = {
//			images: [
//				"images/cat1.jpg",
//				"images/cat2.jpg",
//				"images/cat3.jpg",
//				"images/cat4.jpg",
//				"images/cat5.jpg",
//				"images/cat6.jpg",
//				"images/cat7.jpg",
//				"images/cat8.jpg",
//				"images/cat9.jpg",
//				"images/cat10.jpg"
//			],
//			activeImage: null
//		}
//	}
//	
//  render() {
//		var component = this;
//		
//    return (
//      <div className='container'>
//				{ this.state.activeImage !== null ?
//					<ActiveImage 
//						image={this.state.images[this.state.activeImage]}
//						onClose={ this.deselectCat }/> : null
//				}
//
//				<div className='thumbnails'>
//					{ this.state.images.map((image, i) => {
//						var component = this;
//							return (
//								<ThumbnailImage 
//									key={ i } 
//									image={ image }
//									onSelect={ component.catSelected.bind(component, i) } 
//								/>
//							)
//					})}
//				</div>
//			</div>
//    )
//  }
//
//	catSelected(i){
//		console.log("meow!", i);
//		this.setState({ activeImage: i })
//	}
//	
//	deselectCat(){
//		this.setState({ activeImage: null })
//	}
//	
//}
//
//export default App;