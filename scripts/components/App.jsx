var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var Sidebar = require('./Sidebar.jsx');
var Header = require('./Header.jsx');
var Card = require('./Card.jsx');

var colors = ["#1a1334", "#26294a", "#01545a", "#017351", "#03c383", "#aad962",
  "#fbbf45", "#ef6a32", "#ed0345", "#a12a5e", "#710162", "#110141"];

var App = React.createClass({
  getInitialState() {
    var labels = {
      build: {color: '#ed0345', shape: 'round', filled: true, text: 'build'},
      write: {color: '#03c383', shape: 'round', filled: true, text: 'write'},
      talk: {color: '#4eb3d3', shape: 'round', filled: true, text: 'talk'},
      d3: {color: '#a12a5e', shape: 'square', filled: true, text: 'd3.js'},
      react: {color: '#017351', shape: 'square', filled: true, text: 'react.js'},
      backbone: {color: '#0868ac', shape: 'square', filled: true, text: 'backbone.js'},
      ror: {color: '#fbbf45', shape: 'square', filled: true, text: 'ruby on rails'}
    };

    return {
      labels,
    };
  },

  render() {
    var width = 1200;
    var padding = 20;
    var sideWidth = 200 - 2 * padding;
    var bodyWidth = width - sideWidth - 4 * padding;
    var cardsPerRow = 3;
    var cardWidth = bodyWidth / cardsPerRow - (cardsPerRow - 1) * padding;
    var color = '#222';

    var style = {width, margin: 'auto'};
    var sideStyle = {
      width: sideWidth,
      padding,
    };
    var bodyStyle = {
      width: bodyWidth,
      padding,
      display: 'inline-block',
    };
    var cardStyle = {
      width: cardWidth,
      padding,
      color,
    }

    var cards = _.map(works, name => {
      var data = {name, labels: this.state.labels}
      return (<Card key={name} style={cardStyle} data={data} />);
    });

    return (
      <div style={style}>
        <Sidebar style={sideStyle} labels={this.state.labels} />
        <div style={bodyStyle}>
          <Header labels={this.state.labels} />
          {cards}
        </div>
      </div>
    );
  }
});

module.exports = App;
