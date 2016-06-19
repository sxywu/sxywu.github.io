var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var Label = require('./Label.jsx');

var Sidebar = React.createClass({
  render() {
    var style = Object.assign({
      display: 'inline-block',
      textAlign: 'center',
      verticalAlign: 'top',
      cursor: 'pointer',
    }, this.props.style);
    var logoStyle = {
      width: '100px',
      height: '100px',
    };
    var menuStyle = {
      marginTop: '10px'
    };
    var hrStyle = {
      border: 0,
      height: '1px',
      backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))',
    };
    var labelStyle = {
      margin: '2px 5px',
    }
    var labels = _.map(this.props.labels, (data, key) => {
      return (<Label key={key} style={labelStyle} data={data}>{data.text}</Label>);
    });

    return (
      <div style={style}>
        <div style={logoStyle} />
        <div style={menuStyle}>about</div>
        <div style={menuStyle}>contact</div>
        <div style={menuStyle}>resume</div>
        <hr style={hrStyle} />
        {labels}
      </div>
    );
  }
});

module.exports = Sidebar;
