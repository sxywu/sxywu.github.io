var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var Label = React.createClass({
  render() {
    var size = 8;
    var style = Object.assign({
      color: this.props.data.color,
      cursor: 'pointer',
      display: 'inline-block',
    }, this.props.style);
    var dotStyle = {
      backgroundColor: this.props.data.filled ? this.props.data.color : '#fff',
      border: '2px solid' + this.props.data.color,
      display: 'inline-block',
      width: size,
      height: size,
      borderRadius: this.props.data.shape === 'round' ? size : 0,
      marginRight: '5px',
      verticalAlign: 'middle',
    };

    return (
      <span style={style}>
        <span style={dotStyle} />
        {this.props.children}
      </span>
    );
  }
});

module.exports = Label;
