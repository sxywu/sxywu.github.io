import React from 'react';
import _ from 'lodash';
import Card from './Card';

var Cards = React.createClass({
  render() {
    var margin = this.props.margin / 2;
    var cardsPerRow = this.props.cardsPerRow;
    var cardWidth = (this.props.width - (cardsPerRow - 1) * margin) / cardsPerRow;
    if (cardsPerRow === 1) {
      cardWidth = this.props.width;
    }

    var cardProps = Object.assign(_.clone(this.props), {
      width: cardWidth - margin,
    });

    var cards = _.times(cardsPerRow, i => {
      var cards = _.chain(this.props.data)
        .filter((data, j) => {
          return j % cardsPerRow === i;
        }).map((data, j) => {
          return (<Card key={j} {...data} {...cardProps} />);
        }).value();
      var columnStyle = {
        width: cardWidth,
        display: 'inline-block',
        verticalAlign: 'top',
        marginRight: i < (cardsPerRow - 1) ? margin : 0,
      };

      return (
        <div key={i} style={columnStyle}>
          {cards}
        </div>
      );
    });

    return (
      <div className="Cards">
        {cards}
      </div>
    );
  }
});

export default Cards;
