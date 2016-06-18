var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var Label = require('./Label.jsx');

var Header = React.createClass({
  render() {
    var style = {
      width: this.props.data.width,
      padding: this.props.data.padding,
      display: 'inline-block',
    };

    return (
      <div className='header' style={style}>
        <h1>
Hi, my name is Shirley.
        </h1>
        <h2>
I'm a software engineer based in the San Francisco Bay Area.
I like to build <Label data={this.props.data.labels.silly}>silly</Label> and <Label data={this.props.data.labels.notsilly}>not-as-silly</Label> data visualizations, for learning and for fun.
I work a lot with <Label data={this.props.data.labels.d3}>D3.js</Label> and <Label data={this.props.data.labels.react}>React.js</Label>, and previously with <Label data={this.props.data.labels.backbone}>Backbone.js</Label>.
        </h2>
        <h2>
I <Label data={this.props.data.labels.write}>write</Label> once in a while about the things I learn, and give <Label data={this.props.data.labels.talk}>talks</Label> once in a while too.
        </h2>
      </div>
    );
  }
});

module.exports = Header;
