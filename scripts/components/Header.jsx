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
I'm a software engineer based in the San Francisco Bay Area, and I like to <Label data={this.props.labels.build} onFilter={this.props.onFilter}>build</Label> web applications centered around data visualizations.
I <Label data={this.props.labels.write} onFilter={this.props.onFilter}>write</Label> once in a while about the things I learn, and give <Label data={this.props.labels.talk} onFilter={this.props.onFilter}>talks</Label> once in a while too.  I help <Label data={this.props.labels.organize} onFilter={this.props.onFilter}>organize</Label> meetups for the <a href='www.meetup.com/Bay-Area-d3-User-Group/' target='_new'>Bay Area D3 User Group</a>, and the annual <a href='http://visfest.com/d3unconf/' target='_new'>d3.unconf</a>.
        </h2>
        <h2>
I experiment on <a href='http://bl.ocks.org/sxywu' target='_new'>bl.ocks</a>, version control with <a href='https://github.com/sxywu' target='_new'>github</a>, write on <a href='https://medium.com/@sxywu' target='_new'>medium</a>, and generate 140 characters or less on <a href='https://twitter.com/sxywu' target='_new'>twitter</a>.
        </h2>
      </div>
    );
  }
});

module.exports = Header;
