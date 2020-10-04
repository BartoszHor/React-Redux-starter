import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';


class Card extends React.Component {

static propTypes = {
  title: PropTypes.string,
}
	
render() {
  return (
    <div className={styles.component}>
      <p> {this.props.title} </p>
    </div>

  );
}}

export default Card;


