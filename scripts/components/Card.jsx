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

  componentWillMount() {
    d3.json('works/' + this.props.data.name + '.json', (err, data) => {
      this.setState(data);
    });
  },

  render() {
    var style = Object.assign({
      boxShadow: '0 0 5px #cfcfcf',
      display: 'inline-block',
      marginRight: this.props.style.padding,
      padding: 5,
      textAlign: 'center',
    }, this.props.style);
    var image = this.state.images && 'images/' + this.state.images[0];
    var imgStyle = {
      width: this.props.style.width,
    }

    var labels = _.map(this.state.labels, (name, i) => {
    debugger
      return (<Label key={i} data={this.props.data.labels[name]} />);
    });

    return (
      <div style={style}>
        <div className='header'>
          {this.state.title}
        </div>
        {labels}
        <img src={image} style={imgStyle} />
      </div>
    );
  }
});

module.exports = Card;
