import React from 'react';
import styles from './Card.scss';


class Card extends React.Component {
	
	render() {
			return (
				<div className={styles.component}>
					<p> {this.props.title} </p>
				</div>

			)
		}
	}

	export default Card;


