import types from './types';
const API_URL = 'http://localhost:3004/articles'; // Mock json server url

export function getArticles() {
  return async dispatch => {
    dispatch({
      type: types.getArticlesRequest
    });
    try {
      const response = await fetch(API_URL);
      const result = await response.json();

      if (response.status === 200)
        dispatch({
          type: types.getArticlesSuccess,
          payload: result
        });
      else throw new Error();
    } catch (error) {
      dispatch({ type: types.getArticlesFailure });
    }
  };
}

export function filterArticles(source) {
  return async dispatch => {
    dispatch({
      type: types.filterArticles,
      payload: source
    });
  };
} 