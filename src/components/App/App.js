import React from 'react';
import styles from './App.scss';
import List from '../List/List';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>to do list</h1>
        <h2 className={styles.subtitle}></h2>
        <List />
   		
      </main>
    )
  }
}

export default App;
