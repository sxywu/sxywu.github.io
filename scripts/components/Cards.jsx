var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');
var d3 = require('d3/d3');

var Card = require('./Card.jsx');

var Cards = React.createClass({
  getInitialState() {
    return {
      expanded: null,
    };
  },

  onExpandCard(work) {
    console.log(work);
    this.setState({expanded: work});
  },

  renderColumns(allCards) {
    var cardsPerRow = this.props.cardsPerRow;
    var cardWidth = (this.props.style.width - (cardsPerRow - 1) * this.props.style.padding) / cardsPerRow;
    if (cardsPerRow === 1) {
      cardWidth = this.props.style.width;
    }

    var cardStyle = {
      width: cardWidth - this.props.style.padding,
      marginTop: this.props.style.padding,
    };

    return _.times(cardsPerRow, i => {
      var cards = _.chain(allCards)
        .filter((data, j) => {
          return j % cardsPerRow === i;
        }).map(data => {
          return (<Card key={data.id} style={cardStyle}
            data={data} onExpandCard={this.onExpandCard} />);
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
  },

  renderExpanded(card) {
    var cardStyle = {
      width: this.props.style.width - this.props.style.padding,
      marginTop: this.props.style.padding,
    };

    return (<Card key={card.id} style={cardStyle}
      data={card} onExpandCard={this.onExpandCard} />);
  },

  render() {
    var cardsPerRow = this.props.cardsPerRow;

    var first = _.values(this.props.cards);
    var expanded, second;
    if (this.state.expanded) {
      // if there is a card expanded, then calculate its row
      var expandedIndex = first.indexOf(this.state.expanded);
      var expandedRow = Math.floor(expandedIndex / cardsPerRow);

      // second should be expanded row and everything after, excluding expanded
      second = _.filter(first, (work, i) => work.id !== this.state.expanded.id &&
        Math.floor(i / cardsPerRow) >= expandedRow);
      expanded = this.state.expanded;
      first = _.take(first, expandedRow * cardsPerRow);
    }

    first = this.renderColumns(first);
    expanded = expanded && this.renderExpanded(expanded);
    second = second && this.renderColumns(second);

    return (
      <div>
        {first}
        {expanded}
        {second}
      </div>
    );
  }
});

module.exports = Cards;
