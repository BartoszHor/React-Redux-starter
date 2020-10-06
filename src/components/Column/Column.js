import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';

class Column extends React.Component {
static propTypes = {
  title: PropTypes.string,
  addCard: PropTypes.func,
  cards: PropTypes.array,
  icon: PropTypes.string,
}

static defaultProps = {
  icon: settings.defaultColumnIcon,
}

render() {
  const {title, icon, cards, addCard} = this.props;
  return (
    <section className={styles.component}>
      <h3 className={styles.title}><span className={styles.icon}><Icon name={icon} /> </span>{title}</h3>
      <div className={styles.creator}>
        <Creator text={settings.cardCreatorText} variant='danger' action={addCard}/>
      </div>
      {cards.map(cardsData => (
        <Card key={cardsData.id} {...cardsData} />
      ))}
    
    </section>

  );
}
}

export default Column;