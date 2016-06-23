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
      padding: '7px 7px 20px 7px',
      textAlign: 'center',
      verticalAlign: 'top',
      cursor: 'pointer',
      backgroundColor: '#fff',
    }, this.props.style);
    var imgStyle = {
      width: this.props.style.width,
      borderRadius: '3px',
    }

    var image = this.props.data.images && 'images/' + this.props.data.images[0];
    image = image && (<img src={image} style={imgStyle} />);

    var headerStyle = {
      margin: '10px 20px 3px 20px',
    };

    var labelStyle = {margin: '3px 0 10px 0'};
    var label = (<Label
      style={labelStyle}
      dot={true}
      data={this.props.data.type}
      onFilter={this.props.onFilter}
    />);

    var tagStyle = {
      margin: '3px 40px 10px 40px',
      color: '#666',
      fontSize: '.85em',
    }

    return (
      <div className='card' style={style} onClick={this.onClick}>
        {image}
        <h3 className='header' style={headerStyle}>
          {this.props.data.title}
        </h3>
        {label}
        <div style={tagStyle}>
          {this.props.data.tags.join(',  ')}
        </div>
        <div style={headerStyle}>
          {this.props.data.description}
        </div>
      </div>
    );
  }
});

module.exports = Card;
