import React from 'react';
import logo from './images/logo.png';
import works from './works';

import Card from './Card';

var colors = {
  white: '#fff',
  light: '#fafbfc',
  dark: '#44535d',
  blue: '#51aae8',
  pink: '#e68fc3',
  gold: '#f7cd83',
};

var App = React.createClass({
  getInitialState() {
    return {
      width: 900,
      colors,
      padding: 30,
      margin: 20,
    };
  },

  render() {
    var style = {
      width: this.state.width,
      margin: 'auto',
    };
    var headerStyle = {
      textAlign: 'center',
      backgroundColor: colors.light,
      padding: this.state.padding,
      marginBottom: this.state.margin,
    };
    var nameStyle = {
      fontFamily: 'King Basil',
      color: colors.blue,
      fontSize: 48,
      margin: this.state.margin,
    };
    var mediaStyle = {
      color: colors.pink,
      marginTop: 80,
      fontSize: 20,
    };
    var introStyle = {
      fontSize: 32,
      color: colors.pink,
      textAlign: 'center',
      lineHeight: '48px',
      backgroundColor: colors.light,
      padding: this.state.padding,
      marginBottom: this.state.margin / 2,
    };
    var forStyle = {
      fontFamily: 'King Basil',
      fontSize: 36,
      color: colors.blue,
      textAlign: 'center',
      padding: this.state.padding,
      marginBottom: this.state.margin / 2,
    };

    return (
      <div className="App" style={style}>
        <div className="Header" style={headerStyle}>
          <img src={logo} role="presentation" />
          <div style={nameStyle}>sxywu</div>
          <div style={mediaStyle}>
            <a href='http://twitter.com/sxywu' target='_new'>twitter</a>  |  <a href='http://medium.com/@sxywu' target='_new'>medium</a>  |  <a href='https://github.com/sxywu' target='_new'>github</a>
          </div>
        </div>

        <div style={introStyle}>
          Hi, my name is <span className='king-basil'>Shirley</span>.<br />
          I’m a software engineer,<br />
          and I build <span className='king-basil'>data visualizations</span>.
        </div>

        <div style={forStyle}>for product.</div>

        <Card {...works.product} {...this.state} />
        <Card {...works.reactd3} {...this.state} />
      </div>
    );
  }
});

export default App;
