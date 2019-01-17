import React, { Component } from 'react';
import _ from 'lodash';
import Remarkable from 'remarkable';

import logo from './images/logo.png';
import profileImage from './images/profile.png';
import works from './works';

import Cards from './Cards';
import Card from './Card';

var md = new Remarkable({linkTarget: '_new'});

var colors = {
  white: '#fff',
  light: '#fafbfc',
  dark: '#44535d',
  blue: '#51aae8',
  pink: '#e68fc3',
  gold: '#f7cd83',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 900,
      colors,
      padding: 30,
      margin: 20,
    };
  }

  render() {
    var style = {
      width: this.state.width,
      margin: 'auto',
    };
    var introStyle = {
      color: colors.pink,
      textAlign: 'center',
      fontSize: 24,
      lineHeight: 1.6,
      backgroundColor: colors.light,
      padding: 2.5 * this.state.padding,
    };
    var mediaStyle = {
      fontSize: 16,
      color: colors.pink,
      marginTop: 100,
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

    var experimentWorks1 = [
      works.guardian,
      works.culture,
      works.hamilton,
      works.debate,
    ];
    var experimentWorks2 = [
      works.travel,
      works.filmflowers,
    ];
    var funWorks = [
      works.visfest2,
      works.tweety,
      works.wongfu,
      // works.visfest,
      // works.expenses,
      works["80k"],
    ];
    var writingWorks = [
      works.frontendmasters,
      works.openvis2017,
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
      lineHeight: 1.6,
    };
    var originStory = { __html: md.render(works.profile) };

    var footerStyle = {
      textAlign: 'center',
      backgroundColor: colors.light,
      padding: this.state.padding,
      marginBottom: this.state.margin,
      marginBottom: 0,
      color: colors.pink,
    };
    var footerMediaStyle = Object.assign(_.clone(mediaStyle), {
      marginTop: 0,
    });

    return (
      <div className="App" style={style}>
        <div style={introStyle}>
          <img src={logo} role="presentation" />
          <h2 style={{marginBottom: '0px'}}>
            Hi, my name is <span className='king-basil'>Shirley</span>.
          </h2>
          <div>
            I’m an award-winning creative<br />
            focused on data-driven<br />
            <span className='king-basil'>art</span> and <span className='king-basil'>visualizations</span>.
          </div>

          <div style={mediaStyle}>
            <a href='http://twitter.com/sxywu' target='_new'>twitter</a>  |  <a href='http://medium.com/@sxywu' target='_new'>medium</a>  |  <a href='https://twitch.tv/sxywu' target='_new'>twitch</a>
          </div>
        </div>

        <div className='king-basil' style={forStyle} id='story'>
          ✨<br />
          for story.
        </div>

        <Cards data={experimentWorks1} cardsPerRow={2} {...this.state} />

        <div className='king-basil' style={forStyle} id='product'>
          ✨<br />
          for<br />exploration.
        </div>

        <Card {...works.datasketches} {...this.state} />
        <Cards data={experimentWorks2} cardsPerRow={2} {...this.state} />

        <div style={forWritingStyle} id='talks'>
          🎊<br />
          I also <span className='king-basil'>write</span>, <span className='king-basil'>teach</span>, and<br />
          give <span className='king-basil'>talks</span> once in a while.
        </div>

        <Cards data={writingWorks} cardsPerRow={2} {...this.state} />
        <Card {...works.upcoming} {...this.state} />

        <div className='king-basil' style={forStoryStyle} id='origin'>
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
};

export default App;
