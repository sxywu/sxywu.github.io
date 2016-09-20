import React from 'react';
import _ from 'lodash';
import Remarkable from 'remarkable';

var md = new Remarkable();
var Card = React.createClass({
  render() {
    var width = this.props.width;
    var style = {
      width,
      marginBottom: this.props.margin / 2,
    };
    var order = [];

    // images
    var imageSrc = this.props.images[0];
    var imageOrientation = this.props.images[1];
    var imageWidth = this.props.images[2] || '100%';
    var imageHeight = this.props.images[3] || 'auto';
    var image = (<img src={imageSrc} width={imageWidth} height={imageHeight} role="presentation" />);

    // now calculate annotation width
    var margin = this.props.margin / 2;
    var padding = this.props.padding;
    var annotationWidth = width - imageWidth - margin - 2 * padding;
    var annotationHeight = this.props.annotationHeight - 2 * padding;
    var annotationStyle = {
      padding,
      backgroundColor: this.props.colors.light,
      width: width - 2 * padding,
      display: 'inline-block',
      verticalAlign: 'top',
    };
    annotationStyle["margin" + _.capitalize(imageOrientation)] = this.props.margin / 2;
    if (imageOrientation === 'left' || imageOrientation === 'right') {
      // only set specific pixel widths/heights if image is left or right
      // if it's top or bottom, then just let them be auto
      annotationStyle.width = annotationWidth;
      annotationStyle.height = annotationHeight;
    }

    // calculate for each annotation
    var buttonStyle = {
      fontSize: 24,
      color: this.props.colors.pink,
      // borderBottom: '3px solid',
      fontFamily: 'King Basil',
      display: 'inline-block',
      marginTop: margin,
      marginRight: this.props.margin,
    };
    var annotations = _.map(this.props.annotations, (annotation, i) => {
      var markup = { __html: md.render(annotation) };
      var buttons = _.map(this.props.buttons[i], (button, j) => {
        return (<a key={j} href={button[1]} style={buttonStyle} target='_new'>
          {button[0]} →
        </a>);
      });
      return (
        <div key={i}>
          <div dangerouslySetInnerHTML={markup} />
          {buttons}
        </div>
      );
    });

    var annotation = (
      <div style={annotationStyle}>
        {annotations}
      </div>
    );

    if (imageOrientation === 'left' || imageOrientation === 'top') {
      order.push(image);
      order.push(annotation);
    } else if (imageOrientation === 'right' || imageOrientation === 'bottom') {
      order.push(annotation);
      order.push(image);
    }

    return (
      <div className="Card" style={style}>
        {order}
      </div>
    );
  }
});

export default Card;
