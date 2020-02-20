import React from 'react';
import NewsContainer from './containers/NewsContainer';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>
					News Feed
				</h1>
			</header>
			<NewsContainer />
		</div>
	);
}

export default App;
