var React = require('react');

var ThumbnailImage = React.createClass({
  render: function() {
    return <div className='col-md-3'>
      <a href='#' className='thumbnail' onClick={ this.props.onSelect }>
        <img src={ this.props.image } />
      </a>
    </div>
  }
});

module.exports = ThumbnailImage;
