import React from 'react';
import styles from './header.scss';

var Header = React.createClass({
  render: function() {
    return  <div>
      <div className={ styles.header } >
        Budz Trading Zone
      </div>
    </div>
  }
});

module.exports = Header;
