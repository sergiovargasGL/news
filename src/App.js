import React from 'react';
import NewsContainer from './containers/NewsContainer';
import LoadingOverlay from 'react-loading-overlay';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/Header';


const App = ({ loading }) => {
	return (

		<LoadingOverlay
			active={loading}
			spinner
			text='Loading your content...'
		>
			<div className="App">
				<Header />
				<NewsContainer />
			</div>
		</LoadingOverlay>

	);
}

const mapStateToProps = state => ({
	loading: state.loading
});

export default connect(mapStateToProps)(App);
