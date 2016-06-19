var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var Sidebar = require('./Sidebar.jsx');
var Header = require('./Header.jsx');

var colors = ["#1a1334", "#26294a", "#01545a", "#017351", "#03c383", "#aad962",
  "#fbbf45", "#ef6a32", "#ed0345", "#a12a5e", "#710162", "#110141"];

var App = React.createClass({
  getInitialState() {
    var labels = {
      silly: {color: '#ed0345', shape: 'round', filled: true, text: 'silly'},
      notsilly: {color: '#03c383', shape: 'round', filled: true, text: 'not-silly'},
      write: {color: '#fbbf45', shape: 'round', filled: true, text: 'write'},
      talk: {color: '#4eb3d3', shape: 'round', filled: true, text: 'talk'},
      d3: {color: '#a12a5e', shape: 'square', filled: true, text: 'd3.js'},
      react: {color: '#017351', shape: 'square', filled: true, text: 'react.js'},
      backbone: {color: '#0868ac', shape: 'square', filled: true, text: 'backbone.js'}
    };

    return {
      labels,
    };
  },

  render() {
    var width = 1000;
    var padding = 20;
    var sideWidth = 200;
    var style = {width, margin: 'auto'};


    var sideStyle = {
      width: sideWidth - 2 * padding,
      padding,
    };
    var bodyStyle = {
      width: width - sideWidth - 4 * padding,
      padding,
    };

    return (
      <div style={style}>
        <Sidebar style={sideStyle} labels={this.state.labels} />
        <Header style={bodyStyle} labels={this.state.labels} />
      </div>
    );
  }
});

module.exports = App;
