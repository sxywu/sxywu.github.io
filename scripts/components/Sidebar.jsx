var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var Label = require('./Label.jsx');

var Sidebar = React.createClass({
  render() {
    var style = Object.assign({
      verticalAlign: 'top',
      fontSize: '1.25em',
    }, this.props.style);
    var logoStyle = {
      width: '100px',
      height: '100px',
    };
    var menuStyle = {
      marginBottom: '10px'
    };
    var labelStyle = {
      margin: '5px 0px',
      display: 'block',
    }
    var labels = _.map(this.props.labels, (data, key) => {
      return (
        <Label key={key} style={labelStyle}
          dot={true} data={data} onFilter={this.props.onFilter}>
          {data.text}
        </Label>
      );
    });

    return (
      <div style={style}>
        <h2 className='header'>Shirley XueYang Wu</h2>
        {labels}
        {this.props.children }
      </div>
    );
  }
});

module.exports = Sidebar;
