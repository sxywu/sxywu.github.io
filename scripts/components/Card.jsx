var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');
var d3 = require('d3/d3');

var Label = require('./Label.jsx');

var Card = React.createClass({
  getInitialState() {
    return {
      open: false,
    };
  },

  render() {
    var style = Object.assign({
      boxShadow: '0 0 5px #999',
      border: '1px solid #ccc',
      borderRadius: '3px',
      display: 'inline-block',
      padding: 7,
      textAlign: 'center',
      verticalAlign: 'top',
    }, this.props.style);
    var image = this.props.data.images && 'images/' + this.props.data.images[0];
    var imgStyle = {
      width: this.props.style.width,
    }

    var labelStyle = {margin: '2px 5px'};
    var labels = _.map(this.props.data.labels, (label, i) => {
      return (<Label key={i} style={labelStyle} data={label}>{label.text}</Label>);
    });

    var headerStyle = {
      margin: 0,
    };

    return (
      <div style={style}>
        <h4 className='header' style={headerStyle}>
          {this.props.data.title}
        </h4>
        <img src={image} style={imgStyle} />
        {labels}
      </div>
    );
  }
});

module.exports = Card;
