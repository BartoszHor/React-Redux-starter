import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import {Draggable} from 'react-beautiful-dnd';
import Icon from '../Icon/Icon';
import { Col } from 'react-flexbox-grid';

class Card extends React.Component {

static propTypes = {
  title: PropTypes.string,
  index: PropTypes.number,
  id: PropTypes.string,
  removeCard: PropTypes.func,
  draggable: PropTypes.bool,
}

static defaultProps = {
  draggable: true,
}

render() {
  const {index, id, title, removeCard, draggable} = this.props;
  if(draggable) {
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
  } else {
    return (
      <Col sm={12} md={5} className={styles.col} onClick={() => removeCard(id)}>
        <div className={styles.container}>
          <article className={styles.simpleCard}>
            <p className={styles.title}>{title}</p>
          </article>
        </div>
      </Col>
    );
  }
  
}}

export default Card;
