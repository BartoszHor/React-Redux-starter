import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero'
import PropTypes from 'prop-types';
import Column from '../Column/Column'

class List extends React.Component {
	static propTypes = {
		title: PropTypes.node.isRequired,
		children: PropTypes.node,
		link: PropTypes.string,
	}

	static defaultProps = {
		children: <p> Those things have to be done ASAP </p>,
	}

	render() {
		return (
			<section className={styles.component}>
				<Hero titleText={this.props.title} link={this.props.link} />
				<div className={styles.description}>
					{this.props.children}					
				</div>
				<div className={styles.columns}>
					<Column className={styles.columns} task='Job duties' />
					<Column className={styles.columns} task='Home duties'  />
					<Column className={styles.columns} task='Others'  />
				</div>
			</section>
		)
	}
}

export default List;