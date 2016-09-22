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
      width: cardWidth,
    });

    var cards = _.times(cardsPerRow, i => {
      var dotStyle = {
        color: this.props.colors.blue,
        textAlign: 'center',
      };
      var cards = _.filter(this.props.data, (data, j) => {
        return j % cardsPerRow === i;
      });
      cards = _.map(cards, (data, j) => {
        // if this is the last card, don't add dots
        var dot = (j === cards.length - 1) ? null :
          (<div style={dotStyle}>• •</div>);
        return (
          <div>
            <Card key={j} {...data} {...cardProps} />
            {dot}
          </div>
        );
      });
      var columnStyle = {
        width: cardWidth,
        display: 'inline-block',
        verticalAlign: 'top',
        marginRight: i < (cardsPerRow - 1) ? margin : 0,
        marginBottom: this.props.margin,
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
