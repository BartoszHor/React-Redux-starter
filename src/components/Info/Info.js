import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {settings} from '../../data/dataStore';
import styles from './Info.scss';

const Info = () => (
  <div>
    <Container>
      <Hero link={settings.info.link} />
      <div>
        <h1 className={styles.descriptionHeader}> {settings.info.title}</h1>
        <ul className={styles.list}>
          <li>{settings.info.list.item_1}</li>
          <li>{settings.info.list.item_2}</li>
          <li>{settings.info.list.item_3}</li>
          <li>{settings.info.list.item_4}</li>
          <li>{settings.info.list.item_5}</li>
          <li>{settings.info.list.item_6}</li>
          <li>{settings.info.list.item_7}</li>
        </ul>
      </div>
    </Container>
  </div>
);

export default Info;