import React from 'react';
import NewsContainer from './containers/NewsContainer';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<header className="App-header">
					<h1>
					News Feed
					</h1>
				</header>
				<NewsContainer />
			</div>
		</Provider>
	);
}

export default App;
