import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import articles from './reducers/articles';
import { createLogger } from 'redux-logger';

const logger = createLogger({
	collapsed: true,
	duration: true,
	diff: true
});

const store = createStore(
	articles,
	composeWithDevTools(
		applyMiddleware(
			thunk,
			logger
		)
	)
);

export default store;