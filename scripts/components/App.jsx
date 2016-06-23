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
      build: {id: 'build', color: '#03c383', shape: 'round', filled: true, text: 'build'},
      write: {id: 'write', color: '#07A4D0', shape: 'round', filled: true, text: 'write'},
      talk: {id: 'talk', color: '#fbbf45', shape: 'round', filled: true, text: 'talk'},
      organize: {id: 'organize', color: '#ed0345', shape: 'round', filled: true, text: 'organize'},
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
        data.type = this.state.labels[data.type];

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
    var allLabelsOn = _.every(this.state.labels, label => label.filled);

    if (allLabelsOn) {
      // then set all labels to filled=false first
      _.each(labels, (label) => {
        label.filled = false
      });
    }
    labels[name].filled = !labels[name].filled;

    var filteredLabels = _.chain(labels)
      .filter(label => label.filled)
      .map('id').value();
    console.log(filteredLabels)
    var filteredWorks = _.filter(this.state.works, work => _.includes(filteredLabels, work.type.id));

    this.setState({labels, filteredWorks});
  },

  render() {
    var padding = 20;
    var cardsPerRow = 3;

    var windowWidth = Math.min(window.innerWidth, screen.width);
    var width = window.innerWidth <= 1400 ? window.innerWidth : 1200;
    var sideWidth = 200 - 2 * padding;
    var bodyWidth = width - sideWidth - 4 * padding;

    var style = {
      width,
      margin: 'auto',
      position: 'relative',
    };
    var sideStyle = {
      width: sideWidth,
      padding,
      position: 'fixed',
      textAlign: 'right',
    };

    var sideBar = (
      <div style={sideStyle}>
        <Sidebar labels={this.state.labels} onFilter={this.onFilterLabels} />
        <div style={{marginTop: 15, fontStyle: 'italic'}}>
          showing {this.state.filteredWorks.length} of {this.state.works.length}
        </div>
      </div>
    );
    if (windowWidth <= 560) {
      cardsPerRow = 1;
      sideWidth = 0;
      bodyWidth = width - 2 * padding;
      sideBar = null;
    } else if (windowWidth <= 760) {
      cardsPerRow = 1;
    } else if (windowWidth <= 1060) {
      cardsPerRow = 2;
    }

    var bodyStyle = {
      width: bodyWidth,
      padding,
      display: 'inline-block',
      position: 'absolute',
      left: sideWidth && sideWidth + 2 * padding,
    };
    var cardsStyle = {
      width: bodyWidth,
      padding,
    };

    return (
      <div style={style}>
        {sideBar}
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
