import React from 'react';
import styles from './ListLink.scss';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

const ListLink = ({id, title, link, description}) => (
  <Link to={`/list/${id}`} className={styles.link}>
    <section className={styles.component}>
      <div className={styles.text}>
        <h2 className={styles.title}>{ReactHtmlParser(title)}</h2>
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
      </div>
      <div className={styles.link}>
        <img src={link} />
      </div>
    </section>
  </Link>
);

ListLink.propTypes = {
  id: PropTypes.string,
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  link: PropTypes.string.isRequired,
};

ListLink.defaultProps = {
  description: settings.defaultListDescription,
};

export default ListLink;
