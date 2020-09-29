import React from 'react';
import styles from './App.scss';
import List from '../List/List';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>TO-DO</h1>
        <h2 className={styles.subtitle}></h2>
        <List title={['Work in progress', <sup key='1'>soon!</sup>]} link='https://images.pexels.com/photos/3785927/pexels-photo-3785927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'>
        	<p> Those things have to be done by the end of this week</p>
        </List>
   		
      </main>
    )
  }
}

export default App;
