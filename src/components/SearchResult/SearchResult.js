import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/CardContainer';
import styles from './SearchResult.scss';
import { Row } from 'react-flexbox-grid';
import Hero from '../Hero/Hero';
import {settings} from '../../data/dataStore';



class SearchResult extends React.Component {
static propTypes = {
  cards: PropTypes.array,
  description: PropTypes.string,
}

static defaultProps = {
  description: settings.searchResult.description,
}


render() {
  const {cards, description} = this.props;
  return (
    <section className={styles.component}>
      <Hero link={settings.searchResult.link} titleText={settings.searchResult.text}/>
      <div>
        {description}          
      </div>
      <Row className={styles.row}>
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} draggable={false} />
        ))}
      </Row>
    </section>

  );
}
}

export default SearchResult;