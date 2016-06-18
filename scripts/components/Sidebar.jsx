var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var Sidebar = React.createClass({
  render() {
    var style = {
      width: this.props.data.width,
      padding: this.props.data.padding,
      display: 'inline-block',
      textAlign: 'center',
      verticalAlign: 'top',
      cursor: 'pointer',
    };
    var logoStyle = {
      width: '100px',
      height: '100px',
    };
    var menuStyle = {
      marginTop: '10px'
    }

    return (
      <div style={style}>
        <div style={logoStyle} />
        <div style={menuStyle}>about</div>
        <div style={menuStyle}>contact</div>
        <div style={menuStyle}>resume</div>
      </div>
    );
  }
});

module.exports = Sidebar;
