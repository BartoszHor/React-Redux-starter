import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {settings} from '../../data/dataStore';
import styles from './Faq.scss';

const Faq = () => (
  <div>
    <Container>
      <Hero link={settings.faq.link} />
      <div>
        <h1 className={styles.title}> {settings.faq.title}</h1>
        <p> test content </p> 
      </div>
    </Container>
  </div>
);

export default Faq;