var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');
var d3 = require('d3/d3');

var Sidebar = require('./Sidebar.jsx');
var Header = require('./Header.jsx');
var Cards = require('./Cards.jsx');

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
      ror: {color: '#fbbf45', shape: 'square', filled: true, text: 'ruby on rails'},
      node: {color: '#110141', shape: 'square', filled: true, text: 'node'},
    };

    return {
      labels,
    };
  },

  componentWillMount() {
    d3.json('works/works.json', works => {
      works = _.sortBy(works, data => {
        data.startDate = new Date(data.startDate);
        data.endDate = new Date(data.endDate);
        data.labels = _.map(data.labels, name => this.state.labels[name]);

        return -data.startDate;
      });
      this.setState({works});
    });
  },

  render() {
    var width = 960;
    var padding = 20;
    var sideWidth = 200 - 2 * padding;
    // var bodyWidth = width - sideWidth - 4 * padding;
    var bodyWidth = width - 2 * padding;

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
    var cardsStyle = {
      width: bodyWidth,
      padding,
    };

    return (
      <div style={style}>
        <div style={bodyStyle}>
          <Header labels={this.state.labels} />
          <Cards style={cardsStyle} labels={this.state.labels} cards={this.state.works} />
        </div>
      </div>
    );
  }
});

module.exports = App;
