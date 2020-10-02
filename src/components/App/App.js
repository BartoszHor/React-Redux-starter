import React from 'react';
import styles from './App.scss';
import List from '../List/List';
import Creator from '../Creator/Creator';
import {pageContents, listData, settings} from '../../data/dataStore';

class App extends React.Component {

	state = {
		lists: [listData]
	}

	addList(title){
			this.setState(state => (
			{
				list: [
				...listData,
				{
					key: state.lists.length ? state.lists[state.lists.length-1].key + 1 : 0,
					title,
				}
			]
		}
	));
}
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        {this.state.lists.map(({key, ...listsProps}) => (
        	<List key={key} {...listsProps} />
        	))}
  
   		<Creator text={settings.cardCreatorText} variant='danger' action={title => this.addList(title)}/>
      </main>
    )
  }
}

export default App;
