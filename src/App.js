import React from 'react';
import _ from 'lodash';
import Remarkable from 'remarkable';

import logo from './images/logo.png';
import profileImage from './images/profile.png';
import works from './works';

import Cards from './Cards';
import Card from './Card';

var md = new Remarkable();

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
      cardsPerRow: 2,
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
    var mediaStyle = {
      color: colors.pink,
      marginTop: 100,
    };
    var introStyle = {
      fontSize: 24,
      color: colors.pink,
      textAlign: 'center',
      lineHeight: '48px',
      backgroundColor: colors.light,
      padding: this.state.padding,
      marginBottom: this.state.margin / 2,
    };
    var forStyle = {
      fontSize: 36,
      color: colors.blue,
      textAlign: 'center',
      padding: this.state.padding,
      marginBottom: this.state.margin / 2,
    };
    var forWritingStyle = Object.assign(_.clone(forStyle), {
      fontSize: 28,
    });
    var forStoryStyle = Object.assign(_.clone(forStyle), {
      color: colors.pink,
    });

    var funWorks = [
      works.filmflowers,
      works.wongfu,
      works.tweety,
      works["80k"],
    ];
    var writingWorks = [
      works["2015"],
      works.force,
      works.backboned3,
      works["backboned3_talk"],
    ];

    var profileStyle = {
      width: 150,
      margin: this.state.padding,
    };
    var originStyle = {
      backgroundColor: colors.light,
      padding: this.state.padding,
      marginBottom: this.state.margin / 2,
      textAlign: 'center',
    };
    var originStory = { __html: md.render(works.profile) };

    var footerStyle = Object.assign(_.clone(headerStyle), {
      marginBottom: 0,
      color: colors.pink,
    });
    var footerMediaStyle = Object.assign(_.clone(mediaStyle), {
      marginTop: 0,
    });


    return (
      <div className="App" style={style}>
        <div className="Header" style={headerStyle}>
          <img src={logo} role="presentation" />
          <div style={mediaStyle}>
            <h2>💌</h2>
            <a href='http://twitter.com/sxywu' target='_new'>twitter</a>  |  <a href='http://medium.com/@sxywu' target='_new'>medium</a>  |  <a href='https://github.com/sxywu' target='_new'>github</a>
          </div>
        </div>

        <div style={introStyle}>
          💖<br />
          Hi, my name is <span className='king-basil'>Shirley</span>.<br />
          I’m a software engineer,<br />
          and I build <span className='king-basil'>data visualizations</span>.
        </div>

        <div className='king-basil' style={forStyle}>
          ✨<br />
          for product.
        </div>

        <Card {...works.product} {...this.state} />
        <Card {...works.reactd3} {...this.state} />

        <div className='king-basil' style={forStyle}>
          ✨<br />
          for learning,<br />
          for fun.
        </div>

        <Cards data={funWorks} {...this.state} />

        <div style={forWritingStyle}>
          🎊<br />
          I also <span className='king-basil'>write</span> and<br />
          give <span className='king-basil'>talks</span> once in a while.
        </div>

        <Cards data={writingWorks} {...this.state} />

        <div className='king-basil' style={forStoryStyle}>
          💖<br />
          origin story.
        </div>

        <div style={originStyle}>
          <img style={profileStyle} src={profileImage} role="presentation" />
          <div style={{textAlign: 'left'}} dangerouslySetInnerHTML={originStory} />
        </div>

        <div className='Footer' style={footerStyle}>
          <div className='king-basil' style={forStoryStyle}>
            let’s<br />
            work together.
          </div>
          <h2>💌</h2>
          <div style={footerMediaStyle}>
            <a href='https://www.linkedin.com/in/shirley-xueyang-wu-b71ab022' target='_new'>linkedin</a>  |  <a href='mailto:shirleyxueyangwu@gmail.com' target='_new'>email</a>
          </div>
        </div>

      </div>
    );
  }
});

export default App;
