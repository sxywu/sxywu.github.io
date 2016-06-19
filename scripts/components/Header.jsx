var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var Label = require('./Label.jsx');

var Header = React.createClass({
  render() {
    var style = Object.assign({}, this.props.style);

    return (
      <div className='header' style={style}>
        <h1>
Hi, my name is Shirley.
        </h1>
        <h2>
I'm a software engineer based in the San Francisco Bay Area, and I like to <Label data={this.props.labels.build} onFilter={this.props.onFilter}>build</Label> data visualizations for learning and for fun.
I <Label data={this.props.labels.write} onFilter={this.props.onFilter}>write</Label> once in a while about the things I learn, and give <Label data={this.props.labels.talk} onFilter={this.props.onFilter}>talks</Label> once in a while too.
I primarily use <Label data={this.props.labels.d3} onFilter={this.props.onFilter}>D3.js</Label> and <Label data={this.props.labels.react} onFilter={this.props.onFilter}>React.js</Label> in my work, and used to use <Label data={this.props.labels.backbone} onFilter={this.props.onFilter}>Backbone.js</Label> a lot.
I've also dabbled with <Label data={this.props.labels.ror} onFilter={this.props.onFilter}>Ruby on Rails</Label> and <Label data={this.props.labels.node} onFilter={this.props.onFilter}>Node</Label>, and am currently learning Redux.
        </h2>
        <h2>
I experiment on <a href='http://bl.ocks.org/sxywu' target='_new'>bl.ocks</a>, version control with <a href='https://github.com/sxywu' target='_new'>github</a>, write on <a href='https://medium.com/@sxywu' target='_new'>medium</a>, and generate 140 characters or less on <a href='https://twitter.com/sxywu' target='_new'>twitter</a>.
        </h2>
      </div>
    );
  }
});

module.exports = Header;
