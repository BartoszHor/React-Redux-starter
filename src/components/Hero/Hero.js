import React from 'react'
import styles from './Hero.scss'


const Hero = () => (
	<header className={styles.component}>
		<h2 className={styles.title}>Things that have to be done</h2>
		<img className={styles.image} src="https://images.pexels.com/photos/3785927/pexels-photo-3785927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
	</header>
	);

export default Hero;
