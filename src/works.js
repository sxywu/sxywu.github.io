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
import twentyfifteenImage from './images/2015.png';
import forceImage from './images/force.png';
import backboned3Image from './images/backboned3.png';
import backboned3talkImage from './images/backboned3_talk.png';
import barttalkImage from './images/bart_talk.png';
import d3introImage from './images/d3intro_talk.png';

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
### The Political Brain
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

  "2015": {
    "id": "2015",
    "title": "2015, A Year in Review",
    "startDate": "Jan 15, 2016",
    "type": "build",
    "images": [twentyfifteenImage, "bottom"],
    "annotations": [
      `
### 2015, A Year in Review
A recounting of my work at Illumio and chock-full of screenshots of my side projects and pictures of my travels. A way to remember.
      `
    ],
    "buttons": [[["Read", "https://medium.com/@sxywu/2015-a-year-in-review-706e845b58a1#.sg87p1bb5"]]]
  },

  "force": {
    "id": "force",
    "title": "Understanding the Force",
    "startDate": "Jul 22, 2014",
    "type": "write",
    "images": [forceImage, "top"],
    "annotations": [
      `
### Understanding the Force
An explanation of what D3's force layout is, an explanation of how to use it, as well as how it works under the hood.
      `
    ],
    "buttons": [[["Read", "https://medium.com/@sxywu/understanding-the-force-ef1237017d5#.nedspzkwf"]]]
  },

  "backboned3": {
    "id": "backboned3",
    "title": "Marrying Backbone.js and D3.js",
    "startDate": "May 9, 2013",
    "type": "write",
    "images": [backboned3Image, "bottom"],
    "annotations": [
      `
### Marrying Backbone.js and D3.js
A write-up of the difficulties we encountered trying to use Backbone and D3 together, and the solution we came up with.
      `
    ],
    "buttons": [[["Read", "https://medium.com/@sxywu/marrying-backbone-js-and-d3-js-a7c9c124579e#.gmwv0afuq"]]]
  },

  "backboned3_talk": {
    "id": "backboned3_talk",
    "title": "Marrying Backbone.js and D3.js",
    "startDate": "Dec 16, 2014",
    "type": "talk",
    "images": [backboned3talkImage, "bottom"],
    "annotations": [
      `
### BackboneConf 2014
A follow-up talk to the Backbone.js+D3.js blog posts, covers all three approaches that I experimented with and what I learned from them.
      `
    ],
    "buttons": [
      [
        ["Watch", "https://www.youtube.com/watch?v=TqXD0_tGPv8"],
        ["Read", "http://sxywu.com/backbone-d3/"],
      ]
    ],
  },

  "bart_talk": {
    "id": "bart_talk",
    "title": "bayd3: BART strike project",
    "startDate": "Nov 11, 2013",
    "type": "talk",
    "images": [barttalkImage, "top"],
    "annotations": [
      `
### BayD3: BART Strike Project
A talk explaining the motivations behind my BART strike visualization, and what I learned from the process.
      `
    ],
    "buttons": [
      [
        ["Watch", "https://www.youtube.com/watch?v=Zh2aLYPY16M"],
      ]
    ],
  },

  "d3intro_talk": {
    "id": "d3intro_talk",
    "title": "An Introduction to d3.js",
    "type": "talk",
    "images": [d3introImage, "bottom"],
    "annotations": [
      `
### An Interactive Introduction to D3.js
Explains data-binding and the enter-exit-update pattern.
      `
    ],
    "buttons": [
      [
        ["View", "http://sxywu.com/d3intro/"],
      ]
    ],
  },

  "profile":
      `
When I was a kid, I loved two things: math and art; I wanted to be a painter or Pixar animator when I grew up.  When I entered high school, I took an exhaustive number of math and science classes.  By the end of the four years, I wanted absolutely nothing to do with them.

So naturally, my eighteen-year-old self decided that business would be the exact opposite and be my raison d'être.

Fast-forward three years to my junior year, and I realized I abhored my business classes and adored the few Computer Science classes I took.  When I completed my summer internship at an investment bank, I knew that I couldn't go back.  I decided that I would focus my senior year on completing a CS minor and looking for a full-time job in software engineering.

(My friends told me they had expected this of me all along: "why did you even go into business, anyway?")

And somehow, miraculously, I landed a full-time position at Splunk post-graduation.  (I was beside myself with relief and joy.)  I was introduced to D3 as part of my job, and slowly fell in love with its genius.  I adored D3 and the broader field of data visualization; they felt like a beautiful combination of art and code.

When I started at Illumio, I was happy with my technical knowledge, but wanted to apply it and build a long-term project from the ground up.  Illumination allowed me to do that; I learned so much about teamwork, and the joys and pitfalls of building out a piece of the product from its inception.

I've recently left Illumio.  I'm spending my time learning and exploring the potentials of data visualization, and its intersection of math, art, and code.  I'm trying my hand at freelancing - something I've always wanted to do - and hoping that it'll give me the luxury of diversity in the projects I work on, and the opportunity to see what kind of industries and projects excite me (I believe us millennials call this "soul-searching.").

(My ex-coworkers also told me that freelancing was perfect for me, what with my restless wanderlust and all.)

It's a great unknown for me going forward, but I am comforted with a knowlege: I am doing exactly what I loved as a kid, and what I love as an adult.  And I am excited to see where I go from here.
      `
};
