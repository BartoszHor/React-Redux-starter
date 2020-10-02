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
				lists: [
				...state.lists,
				{
					key: state.lists.length ? state.lists[state.lists.length-1].key + 1 : 0,
					title,
					link: "https://images.pexels.com/photos/3785927/pexels-photo-3785927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
				}
			]
		}
	));
}
  render() {
  	{console.log(this.state.lists)}
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
