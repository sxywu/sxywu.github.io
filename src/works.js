import productImage from './images/product.png';
import reactd3Image from './images/reactd3.png';
// import datasketchesImage from './images/datasketches.png';
import cultureImage from './images/culture.png';
import hamiltonImage from './images/hamilton.png';
import debateImage from './images/debate.png';
import obamasImage from './images/obamas.png';
import travelImage from './images/travel.png';
import filmflowersImage from './images/filmflowers.png';
import wongfuImage from './images/wongfu.png';
import tweetyImage from './images/tweety.png';
import visfest2Image from './images/visfest2.png';
import visfestImage from './images/visfest.png';
import expensesImage from './images/expenses.png';
import eightykImage from './images/80k.png';
import femImage from './images/fem.png';
import openvisImage from './images/openvis.png';

export default {
  "product": {
    "id": "product",
    "title": "Building Data Visualizations for Product",
    "startDate": "Apr 25, 2016",
    "type": "talk",
    "annotationHeight": 350,
    "images": [productImage, "left", 230, 350],
    "annotations": [
      `
### OpenVis Conf 2016
For two and a half years, I worked at Illumio on a part of the product called Illumination - a visualization of application traffic, and a tool for securing it. I helped build it up from scratch, starting from a d3 force layout, to architecting a refactor from Backbone to React, to scaling it to meet the demands of our customers' large environments.

This is the talk I gave at OpenVis Conf about my experiences, the challenges we faced, and the lessons we learned.
      `
    ],
    "buttons": [[["Watch", "https://www.youtube.com/watch?v=fnp9g29lF8c"]]]
  },

  "reactd3": {
    "id": "reactd3",
    "title": "On D3, React, and a little bit of Flux",
    "startDate": "Jul 13, 2015",
    "type": "write",
    "annotationHeight": 350,
    "images": [reactd3Image, "right", 288, 350],
    "annotations": [
      `
### On D3, React, and a little bit of Flux
For a more technical writeup of some of the challenges we faced, I wrote a more detailed account of how we moved from Backbone to React. It also covers the difficulties we faced pairing React with D3, and provides an example app to demonstrate our approach.
      `,
      `
I also gave a talk about the three different approaches I have experimented with using React and D3 together.
      `
    ],
    "buttons": [
      [
        ["Read", "https://medium.com/@sxywu/on-d3-react-and-a-little-bit-of-flux-88a226f328f3#.45ai7qjrd"],
        ["Demo", "http://sxywu.com/expenses"]
      ],
      [["Read", "http://slides.com/shirleywu/deck#/"]]
    ]
  },

  "culture": {
    "id": "culture",
    "title": "Explore Adventure",
    "startDate": "Jan 29, 2017",
    "endDate": "Apr 30, 2017",
    "type": "build",
    "images": [cultureImage, "top"],
    "annotations": [
      `
### EXPLORE ADVENTURE
Digging through a decade of Google travel searches.

##### *built with D3.js, React.js, and Greensock for [Google News Lab](https://newslab.withgoogle.com/).*
      `
    ],
    "buttons": [[
      ["View", "http://explore-adventure.com/"],
      ["Read", "http://www.datasketch.es/march/"]
    ]]
  },

  "hamilton": {
    "id": "hamilton",
    "title": "An Interactive Visualization of Every Line in Hamilton",
    "startDate": "Aug 28, 2016",
    "endDate": "Dec 13, 2016",
    "type": "build",
    "images": [hamiltonImage, "top"],
    "annotations": [
      `
### An Interactive Visualization of Every Line in Hamilton
Analyzing 21,000 words for relational and thematic insights.

##### *built with D3.js, React.js, and HTML5 Canvas for [The Pudding](https://pudding.cool/).*
      `
    ],
    "buttons": [[
      ["View", "https://pudding.cool/2017/03/hamilton/index.html"],
      ["Read", "http://www.datasketch.es/november/"]
    ]]
  },

  "debate": {
    "id": "debate",
    "title": "The Political Brain",
    "startDate": "Oct 20, 2016",
    "endDate": "Oct 28, 2016",
    "type": "build",
    "images": [debateImage, "top"],
    "annotations": [
      `
### THE POLITICAL BRAIN
How the final presidential debate played on the subconscious minds of voters.

##### *built with D3.js, and React.js, for [BRAINSIGHTS](http://brainsights.ca/).*
      `
    ],
    "buttons": [[["View", "http://politics.andyourbrain.com/debate/"]]]
  },

  "obamas": {
    "id": "obamas",
    "title": "Putting Emojis on the President's Face",
    "startDate": "Oct 8, 2016",
    "endDate": "Nov 8, 2016",
    "type": "build",
    "images": [obamasImage, "top"],
    "annotations": [
      `
### Putting Emojis on the President's Face
The number of times POTUS and FLOTUS laughed on late-night.

##### *built with D3.js, React.js, Google Cloud, and a bunch of Node packages for October Data Sketch|es.*
      `
    ],
    "buttons": [[
      ["View", "http://sxywu.com/obamas/"],
      ["Read", "http://www.datasketch.es/october/"]
    ]]
  },

  "datasketches": {
    "id": "datasketches",
    "title": "data sketch|es: a Nadieh & Shirley collaboration",
    "startDate": "Jul 1, 2016",
    "endDate": "Jun 30, 2017",
    "type": "build",
    "images": null,
    "annotations": [
      `
### Data Sketch|es
A twelve-month collaboration with the brilliant [Nadieh Bremer](https://twitter.com/NadiehBremer) of [Visual Cinnamon](http://www.visualcinnamon.com/).

Each month, we choose a topic and build a visualization by the end of the month; an opportunity to experiment and create.  In the process, we document the trials and successes we faced wrangling the data, sketching, and coding the visualization.
      `
    ],
    "buttons": [[["View", "http://www.datasketch.es/"], ["Twitter", "https://twitter.com/datasketches"]]]
  },

  "travel": {
    "id": "travel",
    "title": "Four Years of Vacations in 20,000 Colors",
    "startDate": "Sep 11, 2016",
    "endDate": "Oct 2, 2016",
    "type": "build",
    "images": [travelImage, "top"],
    "annotations": [
      `
  ### Four Years of Vacations in 20,000 Colors
  4,000 photos over 13 trips, their colors visualized.  Further experimentation in color.

  ##### *built with D3.js, React.js, and HTML5 Canvas, for September Datasketch|es.*
      `
    ],
    "buttons": [[
      ["View", "http://sxywu.com/travel/"],
      ["Read", "http://www.datasketch.es/september/"]
    ]]
  },

  "filmflowers": {
    "id": "filmflowers",
    "title": "Film Flowers",
    "startDate": "Jul 19, 2016",
    "endDate": "Jul 30, 2016",
    "type": "build",
    "images": [filmflowersImage, "top"],
    "annotations": [
      `
### Film Flowers
Summer blockbusters reimagined as flowers. An experimentation with color.

##### *built with D3.js, for July Datasketch|es.*
      `
    ],
    "buttons": [[
      ["View", "http://bl.ocks.org/sxywu/raw/d612c6c653fb8b4d7ff3d422be164a5d/"],
      ["Read", "http://www.datasketch.es/july/"]
    ]]
  },

  "wongfu": {
    "id": "wongfu",
    "title": "Wong Fu & Friends (WIP)",
    "startDate": "Mar 13, 2014",
    "endDate": "Apr 17, 2016",
    "type": "build",
    "images": [wongfuImage, "top"],
    "annotations": [
      `
### Wong Fu & Friends
A visualization of the Youtube channel Wong Fu Productions, and their collaborations with other channels over the years.  A work-in-progress.

##### *built with D3.js, React.js, Flux, and the Youtube API.*
      `
    ],
    "buttons": [[["Code", "https://github.com/sxywu/wongfu"]]]
  },

  "tweety": {
    "id": "tweety",
    "title": "tweety",
    "startDate": "Nov 18, 2015",
    "endDate": "Dec 22, 2015",
    "type": "build",
    "images": [tweetyImage, "bottom"],
    "annotations": [
      `
### Tweety
A portrait of tweets. Twitter profile pictures in a pointillist fashion, with their latest tweets mapped to each dot. An exercise in HTML5 Canvas.

##### *built with D3.js, React.js, HTML5 Canvas, and the Twitter API.*
      `
    ],
    "buttons": [[
      ["View", "http://sxywu.com/tweety/"],
      ["Code", "https://github.com/sxywu/tweety"]
    ]]
  },

  "visfest2": {
    "id": "visfest2",
    "title": "viSFest block submissions",
    "startDate": "Oct 3, 2016",
    "endDate": "Oct 15, 2016",
    "type": "build",
    "images": [visfest2Image, "top"],
    "annotations": [
      `
  ### Visfest 2016
  A visualization of all the bl.ocks submitted to the [2016 D3.Unconf](http://visfest.com/d3unconf-2016/), tesselated as hexagons.

  ##### *built with D3.js.*
      `
    ],
    "buttons": [[
      ["View", "http://bl.ocks.org/sxywu/raw/82144236b9a920f77e3af1776d265c57/"],
      ["Code", "http://bl.ocks.org/sxywu/82144236b9a920f77e3af1776d265c57"]
    ]]
  },

  "visfest": {
    "id": "visfest",
    "title": "viSFest block submissions",
    "startDate": "Oct 24, 2015",
    "endDate": "Oct 26, 2015",
    "type": "build",
    "images": [visfestImage, "bottom"],
    "annotations": [
      `
### Visfest 2015
A visualization of all the bl.ocks submitted to the [2015 D3.Unconf](http://visfest.com/d3unconf-2015/), organized by proximity to their most frequently used d3 functions.

##### *built with D3.js.*
      `
    ],
    "buttons": [[
      ["View", "http://sxywu.com/visfest/"],
      ["Code", "https://github.com/sxywu/visfest"]
    ]]
  },

  "expenses": {
    "id": "expenses",
    "title": "A Simple Expense App",
    "startDate": "Feb 15, 2015",
    "endDate": "Jul 12, 2015",
    "type": "build",
    "images": [expensesImage, "top"],
    "annotations": [
      `
### A Simple Expense App
An expense-tracking app, built as an example for my blog post [On D3, React, and a little bit of Flux](https://medium.com/@sxywu/on-d3-react-and-a-little-bit-of-flux-88a226f328f3#.45ai7qjrd).  Allows user to add, edit, delete, and categorize expenses with an accompanying visual.

##### *built with D3.js, React.js, and Flux.*
      `
    ],
    "buttons": [[
      ["View", "http://sxywu.com/expenses/"],
      ["Code", "https://github.com/sxywu/expenses"]
    ]]
  },

  "80k": {
    "id": "80k",
    "title": "Annual Income and Cost of Living for BART Employees",
    "startDate": "Oct 2, 2013",
    "endDate": "Oct 17, 2013",
    "type": "build",
    "images": [eightykImage, "bottom"],
    "annotations": [
      `
### 80k
Projected annual income and cost of living for a BART employee, depending on the negotiated proposals from the 2013 BART strikes.

##### *built with D3.js and Backbone.js*
      `
    ],
    "buttons": [[
      ["View", "http://sxywu.com/80k"],
      ["Code", "https://github.com/sxywu/80k"]
    ]]
  },

  "frontendmasters": {
    "id": "frontendmasters",
    "title": "Frontend Masters",
    "type": "talk",
    "images": [femImage, "top"],
    "annotations": [
      `
### Frontend Masters

A one-day workshop with Frontend Masters, where I go through the core concepts of D3 and walk the audience through creating charts from start to finish.
      `
    ],

    "buttons": [
      [
        ["Watch", "https://frontendmasters.com/courses/d3-v4/"],
      ]
    ],
  },

  "openvis2017": {
    "id": "openvis2017",
    "title": "OpenVis Conf 2017",
    "type": "talk",
    "images": [openvisImage, "top"],
    "annotations": [
      `
### OpenVis Conf 2017

Nadieh and I go through our favorite Data Sketch|es months, the bugs we made, the challenges we overcame, and the lessons we learned.
      `
    ],

    "buttons": [
      [
        ["Watch", "https://www.youtube.com/watch?v=4EOG7KwFspk"],
      ]
    ],
  },

  "upcoming": {
    "id": "upcoming",
    "title": "data sketch|es: a Nadieh & Shirley collaboration",
    "type": "TALK",
    "images": null,
    "annotations": [
      `
[ShirleyChats](https://www.youtube.com/watch?v=AqNn9jEtARE&list=PL1J8Fh6-iQxI9Yfr44TirO77UShmh4XxB): a series of live chats with friends in the data visualization and tech industries.

### Upcoming

[GDG DevFest 2017](https://devfest2017.gdg-sv.com/) // Mountain View, USA // December 16, 2017

[JSConf Asia 2018](https://2018.jsconf.asia/) // Singapore // January 25-27, 2018

[React Amsterdam 2018](https://react.amsterdam/) // Amsterdam, Netherlands // April 13, 2018

### Past

[Tokyo Node Festival 2017](http://nodefest.jp/2017/) // Tokyo, Japan // November 25-26, 2017

[Reactive Conf 2017](https://reactiveconf.com/) // Bratislava, Slovakia // October 25-27, 2017

[ReactNext 2017](https://www.youtube.com/watch?v=w493jXg5D8o) // Tel Aviv, Israel // September 10, 2017

[Reasons To 2017](https://reasons.to/2017/brighton) (elevator pitch) // Brighton, UK // September 4-6, 2017

[React Rally 2017](https://www.youtube.com/watch?v=ladXdJ3KKd4) // Salt Lake City, UT // August 24-25, 2017

[CSSConf EU 2017](https://www.youtube.com/watch?v=nuboC-FLwGM) // Berlin, Germany // May 5, 2017

[Openvis Conf 2017](https://www.youtube.com/watch?v=4EOG7KwFspk) // Boston, MA // April 24, 2017

[Visualizing Hamilton](http://sxywu.com/hamilton-talk/#/intro) // San Francisco, CA & Los Gatos, CA // March 7 & 14, 2017

[Openvis Conf 2016](https://www.youtube.com/watch?v=fnp9g29lF8c) // Boston, MA // April 25, 2016

[BackboneConf 2014](https://www.youtube.com/watch?v=TqXD0_tGPv8) // Boston, MA // December 15, 2014

### Podcasts & Interviews

[Data is Beautiful Subreddit: Ask Me Anything!](https://www.reddit.com/r/dataisbeautiful/comments/75q0qi/im_shirley_wu_freelance_data_visualization/) // October 12, 2017

[Frontend Masters Path to Mastery: Saying Yes to Challenges](https://frontendmasters.com/sale/?wvideo=tgl2w96cqc) // September 14, 2017

[Quick Questions with Shirley Wu](https://medium.com/@Matt24Ray_74743/qq-with-shirley-wu-junior-edition-df3f6316d839) // August 12, 2017

[Frontend Happy Hour: Plotting our drinks](http://frontendhappyhour.com/episodes/plotting-our-drinks/) // July 17, 2017

[Data Stories: Data Sketches with Nadieh Bremer and Shirley Wu](http://datastori.es/98-data-sketches-with-nadieh-bremer-and-shirley-wu/) // May 17, 2017

[Toolsday: Data Sketches](http://toolsday.io/episodes/datasketches.html) // May 16, 2017

[Animation in Dataviz – An Interview with Nadieh Bremer and Shirley Wu](http://valhead.com/2017/04/27/animation-in-dataviz-data-sketches/) // April 27th, 2017

[Elsie Cast: Data Visualization](https://elsiepod.wordpress.com/2017/02/13/episode-10-data-visualization/) // February 13, 2017

[Modern Web: Data Visualization on the Web with DataSketches](https://modernweb.podbean.com/e/s04e01-d3/) // December 1, 2016

### Blog Posts

[655 Frustrations Doing Data Visualization](https://medium.com/visualizing-the-field/655-frustrations-doing-data-visualization-e1087c8176fc) // September 21, 2017

[2015, A Year in Review](https://medium.com/@sxywu/2015-a-year-in-review-706e845b58a1) // January 15, 2016

[On D3, React, and a little bit of Flux](https://medium.com/@sxywu/on-d3-react-and-a-little-bit-of-flux-88a226f328f3) // July 13, 2015

[Understanding the Force](https://medium.com/@sxywu/understanding-the-force-ef1237017d5) // July 22, 2014

[An Interactive Introduction to D3.js](http://sxywu.com/d3intro/) // July 18, 2014

[Marrying Backbone.js and D3.js, a Follow-up](https://medium.com/@sxywu/marrying-backbone-js-and-d3-js-a-follow-up-b6a62a9731e1) // July 5, 2014

[Marrying Backbone.js and D3.js](https://medium.com/@sxywu/marrying-backbone-js-and-d3-js-a7c9c124579e) // May 9, 2013
      `
    ],
    "buttons": [[]]
  },

  "profile":
      `
When I was a kid, I loved two things: math and art. I wanted to be a painter or Pixar animator when I grew up.  When I entered high school, I took an exhaustive number of math and science classes.  By the end of the four years, I wanted absolutely nothing to do with them.

So naturally, my eighteen-year-old self decided that business would be the exact opposite and be my raison d'être.  Fast-forward three years to my junior year, and I realized I abhored my business classes and adored the few Computer Science classes I took.  When I completed my summer internship at an investment bank, I knew that I couldn't go back.  I decided that I would focus my senior year on completing a CS minor and looking for a full-time job in software engineering.

(My friends told me they had expected this of me all along: "why did you even go into business, anyway?")

And somehow, miraculously, I landed a full-time position at [Splunk](https://www.splunk.com/) post-graduation.  (I was beside myself with relief and joy.)  I was introduced to D3 as part of my job, and slowly fell in love with its genius.  I adored [D3](https://d3js.org/) and the broader field of data visualization; they felt like a beautiful combination of art and code.

When I started at [Illumio](https://www.illumio.com/home), I was happy with my technical knowledge, but wanted to apply it and build a long-term project from the ground up.  [Illumination](https://www.illumio.com/services#illumination) allowed me to do that; I learned so much about teamwork, and the joys and pitfalls of building out a piece of the product from its inception.

I left Illumio in the summer of last year, and have been trying my hand at freelancing since.  It's been an amazing (though stressful) ride, and I've had the opportunity to work with companies in a wide variety of industries.  It's been eye-opening to learn about their products, their problem statements, and their philosophies.  I've also had the opportunity to step away from product, and try my hand at narrative and storytelling.

I'm hoping to keep freelancing for as long as I can.  I'm still excited to see where I go from here.
      `
};
