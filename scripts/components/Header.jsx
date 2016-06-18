var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var Label = require('./Label.jsx');

var Header = React.createClass({
  render() {
    var style = Object.assign({
      display: 'inline-block',
    }, this.props.style);

    return (
      <div className='header' style={style}>
        <h1>
Hi, my name is Shirley.
        </h1>
        <h2>
I'm a software engineer based in the San Francisco Bay Area.
I like to build <Label data={this.props.labels.silly}>silly</Label> and <Label data={this.props.labels.notsilly}>not-as-silly</Label> data visualizations, for learning and for fun.
I primarily use <Label data={this.props.labels.d3}>D3.js</Label> and <Label data={this.props.labels.react}>React.js</Label> for my visualizations, and used to use <Label data={this.props.labels.backbone}>Backbone.js</Label> a lot more.
I've dabbled with Ruby on Rails and Node, and am currently learning Redux.
        </h2>
        <h2>
I <Label data={this.props.labels.write}>write</Label> once in a while about the things I learn, and give <Label data={this.props.labels.talk}>talks</Label> once in a while too.
        </h2>
      </div>
    );
  }
});

module.exports = Header;
