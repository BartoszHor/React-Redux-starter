import React from 'react';
import styles from './Button.scss';

const Button = ({props, variant = '', ...otherProps}) => (
  <button 
    {...otherProps} 
    className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}
  	props={'small'}
  />
);

export default Button;
