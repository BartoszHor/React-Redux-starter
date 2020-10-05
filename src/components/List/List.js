import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/columnContainer';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator';

class List extends React.Component {

static propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  link: PropTypes.string,
  columns: PropTypes.array,
  addColumn: PropTypes.func,
}

static defaultProps = {
  description: settings.defaultListDescription,
}

render() {
  const {title, link, description, columns, addColumn} = this.props;
  return (
    <section className={styles.component}>
      <Hero titleText={title} link={link} />
      <div className={styles.description}>
        {ReactHtmlParser(description)}					
      </div>
      
      <div className={styles.columns}>
        {columns.map(columnData => (
          <Column key={columnData.id} {...columnData} />
        ))}
      </div>
      <div className={styles.creator}>
        <Creator variant="danger" text={settings.columnCreatorText} action={addColumn}/>
      </div>
    </section>
  );
}
}

export default List;