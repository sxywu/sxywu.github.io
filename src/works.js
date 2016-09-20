import productImage from './images/product.png';

export default {
  "product": {
    "id": "product",
    "title": "Building Data Visualizations for Product",
    "startDate": "Apr 25, 2016",
    "type": "talk",
    "cardWidth": 1,
    "annotationHeight": 350,
    "images": [productImage, "left", 230, 350],
    "annotations": [`
For two and a half years, I worked at Illumio on a part of the product called Illumination - a visualization of application traffic, and a tool for securing it. I helped build it up from scratch, starting from a d3 force layout, to architecting a refactor from Backbone to React, to scaling it to meet the demands of our customers' large environments.

This is the talk I gave at OpenVis Conf about my experiences, the challenges we faced, and the lessons we learned.
`.trim()],
    "buttons": [["Watch", "https://www.youtube.com/watch?v=fnp9g29lF8c"]]
  }
};
