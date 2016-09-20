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
    var imageWidth = this.props.images[2];
    var imageHeight = this.props.images[3];
    var image = (<img src={imageSrc} width={imageWidth} height={imageHeight} role="presentation" />);

    // now calculate annotation width
    var margin = this.props.margin / 2;
    var padding = this.props.padding;
    var annotationWidth = width - imageWidth - margin - 2 * padding;
    var annotationHeight = this.props.annotationHeight - 2 * padding;
    var annotationStyle = {
      padding,
      width: annotationWidth,
      height: annotationHeight,
      backgroundColor: this.props.colors.light,
      display: 'inline-block',
      verticalAlign: 'top',
    };
    var buttonStyle = {
      fontSize: 24,
      color: this.props.colors.pink,
      // borderBottom: '3px solid',
      fontFamily: 'King Basil',
      display: 'inline-block',
      marginRight: this.props.margin,
    };
    var annotations = _.map(this.props.annotations, (annotation, i) => {
      var markup = { __html: md.render(annotation) };
      var buttons = _.map(this.props.buttons[i], (button, j) => {
        return (<a key={j} href={button[1]} style={buttonStyle} target='_new'>
          {button[0]} →
        </a>);
      });
      console.log(buttons)
      return (
        <div key={i}>
          <div dangerouslySetInnerHTML={markup} />
          {buttons}
        </div>
      );
    });

    annotationStyle["margin" + _.capitalize(imageOrientation)] = this.props.margin / 2;
    var annotation = (
      <div style={annotationStyle}>
        {annotations}
      </div>
    );

    if (imageOrientation === 'left') {
      order.push(image);
      order.push(annotation);
    } else if (imageOrientation === 'right') {
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
