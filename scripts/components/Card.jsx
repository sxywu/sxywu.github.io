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

  onClick() {
    window.open(this.props.data.url, '_new');
  },

  render() {
    var style = Object.assign({
      border: '1px solid #666',
      borderRadius: '3px',
      display: 'inline-block',
      padding: '15px 10px 20px 10px',
      textAlign: 'center',
      verticalAlign: 'top',
      cursor: 'pointer',
    }, this.props.style);
    var image = this.props.data.images && 'images/' + this.props.data.images[0];
    var imgStyle = {
      width: this.props.style.width,
    }

    var labelStyle = {margin: '3px 0 10px 0'};
    var labels = _.map(this.props.data.labels, (label, i) => {
      return (<Label key={i} style={labelStyle} data={label} onFilter={this.props.onFilter} />);
    });

    var headerStyle = {
      margin: 0,
    };

    return (
      <div className='card' style={style} onClick={this.onClick}>
        <h3 className='header' style={headerStyle}>
          {this.props.data.title}
        </h3>
        {labels}
        <img src={image} style={imgStyle} />
      </div>
    );
  }
});

module.exports = Card;
