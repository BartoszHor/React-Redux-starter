import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/columnContainer';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator';
import Search from '../Search/SearchContainer';

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
  link: 'https://images.pexels.com/photos/3785927/pexels-photo-3785927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
}

render() {
  const {title, link, description, columns, addColumn} = this.props;
  return (
    <section className={styles.component}>
      <Hero titleText={title} link={link} />
      <div className={styles.description}>
        {ReactHtmlParser(description)}					
      </div>
      <Search />
      <div className={styles.columns}>
        {columns.map(columnData => (
          <Column key={columnData.id} {...columnData}  />
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