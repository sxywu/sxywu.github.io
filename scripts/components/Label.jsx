var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var Label = React.createClass({
  onClick(e) {
    e.stopPropagation();
    this.props.onFilter(this.props.data.id);
  },

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
      borderRadius: this.props.data.shape === 'round' ? size : size / 3,
      marginRight: '5px',
      verticalAlign: 'middle',
    };
    var dot = this.props.dot && (<span style={dotStyle} />);

    return (
      <span className='label' style={style} onClick={this.onClick}>
        {dot}
        {this.props.children}
      </span>
    );
  }
});

module.exports = Label;
