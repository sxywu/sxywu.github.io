import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';

var colors = {
  white: '#fff',
  light: '#fafbfc',
  dark: '#dark',
  blue: '#51aae8',
  pink: '#e68fc3',
  gold: '#f7cd83',
};

class App extends Component {
  render() {
    var style = {
      width: 800,
      margin: 'auto',
    };
    var headerStyle = {
      textAlign: 'center',
      backgroundColor: colors.light,
      padding: 40,
      marginBottom: 20,
    };
    var nameStyle = {
      fontFamily: 'King Basil',
      color: colors.blue,
      fontSize: 48,
      margin: 20,
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
      padding: 40,
      marginBottom: 20,
    };
    var forStyle = {
      fontFamily: 'King Basil',
      fontSize: 36,
      color: colors.blue,
      textAlign: 'center',
      padding: 40,
      marginBottom: 20,
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
      </div>
    );
  }
}

export default App;
