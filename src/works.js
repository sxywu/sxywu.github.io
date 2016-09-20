import productImage from './images/product.png';
import reactd3Image from './images/reactd3.png';
import filmflowersImage from './images/filmflowers.png';
import wongfuImage from './images/wongfu.png';
import tweetyImage from './images/tweety.png';
import eightykImage from './images/80k.png';
import twentyfifteenImage from './images/2015.png';

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
For a more technical writeup of some of the challenges we faced, I wrote a more detailed account of how we moved from Backbone to React. In particular, it covers our reasons for migrating, as well as the difficulties we faced pairing React with D3, and provides an example app to demonstrate our approach.
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

  "filmflowers": {
    "id": "filmflowers",
    "title": "Film Flowers",
    "startDate": "Jul 19, 2016",
    "endDate": "Jul 30, 2016",
    "type": "build",
    "images": [filmflowersImage, "top"],
    "annotations": [
      `
Summer blockbusters reimagined as flowers. An experimentation with color.
      `
    ],
    "buttons": [[["View", "http://bl.ocks.org/sxywu/raw/d612c6c653fb8b4d7ff3d422be164a5d/"]]]
  },

  "wongfu": {
    "id": "wongfu",
    "title": "Wong Fu & Friends (WIP)",
    "startDate": "Mar 13, 2014",
    "endDate": "Apr 17, 2016",
    "type": "build",
    "images": [wongfuImage, "bottom"],
    "annotations": [
      `
A visualization of the Youtube channel Wong Fu Productions, and their collaborations with other channels over the years.  A work-in-progress.
      `
    ],
    "buttons": [[["View code", "https://github.com/sxywu/wongfu"]]]
  },

  "tweety": {
    "id": "tweety",
    "title": "tweety",
    "startDate": "Nov 18, 2015",
    "endDate": "Dec 22, 2015",
    "type": "build",
    "images": [tweetyImage, "top"],
    "annotations": [
      `
A portrait of tweets. Twitter profile pictures in a pointillist fashion, with their latest tweets mapped to each dot. An exercise in HTML5 canvas.
      `
    ],
    "buttons": [[["View", "http://sxywu.com/tweety/"]]]
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
Projected annual income and cost of living for a BART employee, depending on the negotiated proposals from the 2013 BART strikes.
      `
    ],
    "buttons": [[["View", "http://sxywu.com/80k"]]]
  },

  "2015": {
    "id": "2015",
    "title": "2015, A Year in Review",
    "startDate": "Jan 15, 2016",
    "type": "build",
    "images": [twentyfifteenImage, "bottom"],
    "annotations": [
      `
My 2015 year in review. A recounting of my work at Illumio and chock-full of screenshots of my side projects and pictures of my travels. A way to remember ☺️
      `
    ],
    "buttons": [[["Read", "https://medium.com/@sxywu/2015-a-year-in-review-706e845b58a1#.sg87p1bb5"]]]
  },

};
