import React from 'react';
import styles from './ListLink.scss';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import { Col } from 'react-flexbox-grid';

const ListLink = ({id, title, link, description}) => (
  <Col sm={12} md={6} className={styles.col}>
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
  </Col>
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
