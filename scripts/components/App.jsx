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
      build: {id: 'build', color: '#ed0345', shape: 'round', filled: false, text: 'build'},
      write: {id: 'write', color: '#03c383', shape: 'round', filled: false, text: 'write'},
      talk: {id: 'talk', color: '#4eb3d3', shape: 'round', filled: false, text: 'talk'},
      d3: {id: 'd3', color: '#a12a5e', shape: 'square', filled: false, text: 'd3.js'},
      react: {id: 'react', color: '#017351', shape: 'square', filled: false, text: 'react.js'},
      backbone: {id: 'backbone', color: '#0868ac', shape: 'square', filled: false, text: 'backbone.js'},
      ror: {id: 'ror', color: '#fbbf45', shape: 'square', filled: false, text: 'ruby on rails'},
      node: {id: 'node', color: '#110141', shape: 'square', filled: false, text: 'node'},
    };

    return {
      labels,
      works: {},
      filteredWorks: {},
    };
  },

  componentWillMount() {
    d3.json('works/works.json', works => {
      works = _.sortBy(works, data => {
        data.startDate = new Date(data.startDate);
        data.endDate = data.endDate && new Date(data.endDate);
        data.labels = _.map(data.labels, name => this.state.labels[name]);

        return -(data.endDate || data.startDate);
      });
      this.setState({works, filteredWorks: works});
    });
  },

  componentDidMount() {
    window.addEventListener('resize', _.debounce(() => {
      this.forceUpdate();
    }, 200))
  },

  onFilterLabels(name) {
    var labels = this.state.labels;
    labels[name].filled = !labels[name].filled;

    var filteredLabels = _.chain(labels)
      .filter(label => label.filled)
      .map('id').value();

    var filteredWorks = this.state.works;
    if (filteredLabels.length) {
      filteredWorks = _.filter(filteredWorks, work => {
        return _.some(work.labels, label => {
          return _.includes(filteredLabels, label.id);
        });
      });
    }

    this.setState({labels, filteredWorks});
  },

  render() {
    var width = 1060;
    var cardsPerRow = 3;
    console.log(window.innerWidth)
    if (window.innerWidth <= 320) {
      width = 300;
      cardsPerRow = 1;
    } else if (window.innerWidth <= 667) {
      width = 600;
      cardsPerRow = 1;
    } else if (window.innerWidth <= 768) {
      width = 700;
      cardsPerRow = 2;
    } else if (window.innerWidth <= 980) {
      width = 900;
      cardsPerRow = 2;
    }

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
          <Header labels={this.state.labels} onFilter={this.onFilterLabels} />
          <Cards style={cardsStyle} cardsPerRow={cardsPerRow}
            labels={this.state.labels} cards={this.state.filteredWorks}
            onFilter={this.onFilterLabels} />
        </div>
      </div>
    );
  }
});

module.exports = App;
