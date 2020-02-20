import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import articles from './reducers/articles';

const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true
});

const store = createStore(
  articles,
  composeWithDevTools(
    /* logger must be the last middleware in chain to log actions */
    applyMiddleware(
      thunk,
      logger
    )
  )
);

export default store;