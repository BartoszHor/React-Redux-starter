import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import {Draggable} from 'react-beautiful-dnd';
import Icon from '../Icon/Icon';


class Card extends React.Component {

static propTypes = {
  title: PropTypes.string,
  index: PropTypes.number,
  id: PropTypes.string,
  removeCard: PropTypes.func,
}
	
render() {
  const {index, id, title, removeCard} = this.props;
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
      
        <article
          className={styles.component}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {title}
          <span className={styles.close} onClick={() => removeCard(id)}><Icon name="times" /></span>
        </article>
      )}
    </Draggable>

  );
}}

export default Card;
