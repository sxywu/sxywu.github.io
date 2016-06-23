var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');
var d3 = require('d3/d3');

var Card = require('./Card.jsx');

var Cards = React.createClass({
  render() {
    var cardsPerRow = this.props.cardsPerRow;
    var cardWidth = (this.props.style.width - (cardsPerRow - 1) * this.props.style.padding) / cardsPerRow;
    if (cardsPerRow === 1) {
      cardWidth = this.props.style.width;
    }

    var cardStyle = {
      width: cardWidth - this.props.style.padding,
      marginTop: this.props.style.padding,
    };
    var columns = _.times(cardsPerRow, i => {
      var cards = _.chain(this.props.cards)
        .filter((data, j) => {
          return j % cardsPerRow === i;
        }).map(data => {
          return (<Card key={data.id} style={cardStyle} data={data}  onFilter={this.props.onFilter}/>);
        }).value();
      var columnStyle = {
        width: cardWidth,
        display: 'inline-block',
        verticalAlign: 'top',
        marginRight: i < (cardsPerRow - 1) ? this.props.style.padding : 0,
      };

      return (
        <div key={i} style={columnStyle}>
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
