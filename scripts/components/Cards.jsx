var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');
var d3 = require('d3/d3');

var Card = require('./Card.jsx');

var Cards = React.createClass({
  render() {
    var cardsPerRow = 3;
    var cardWidth = (this.props.style.width - (cardsPerRow - 1) * this.props.style.padding) / cardsPerRow;
    if (window.innerWidth < 460) {
      cardsPerRow = 1;
      cardWidth = this.props.style.width;
    }

    var cardStyle = {
      width: cardWidth - this.props.style.padding,
      marginTop: this.props.style.padding,
    };
    var columns = _.times(cardsPerRow, i => {
      var cards = _.chain(this.props.cards)
        .filter((data, j) => {
          console.log(i, j, j / cardsPerRow === i)
          return j % cardsPerRow === i;
        }).map(data => {
          return (<Card key={data.id} style={cardStyle} data={data} />);
        }).value();
      var columnStyle = {
        width: cardWidth,
        display: 'inline-block',
        verticalAlign: 'top',
        marginRight: i < (cardsPerRow - 1) ? this.props.style.padding : 0,
      };

      return (
        <div style={columnStyle}>
          {cards}
        </div>
      );
    });

    return (
      <div>
        {columns}
      </div>
    );
  }
});

module.exports = Cards;
