import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';



class SearchResult extends React.Component {
static propTypes = {
  cards: PropTypes.array,
}

render() {
  const {cards} = this.props;
  return (
    <section>
      {cards.map(cardData => (
        <Card key={cardData.id} {...cardData} draggable={false} />
      ))}
    </section>

  );
}
}

export default SearchResult;