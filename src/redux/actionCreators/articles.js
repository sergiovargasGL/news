import types from './types';
import dotenv from 'dotenv';

dotenv.config();
const API_URL = 'http://localhost:3004/articles'; // Mock json server url
//const API_URL = `http://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20&country=us&page=`

export function getArticles(pageNumber) {
  return async dispatch => {
    dispatch({
      type: types.getArticlesRequest
    });
    try {
      const response = await fetch(API_URL);//mock json
      //const response = await fetch(API_URL+pageNumber)
      const result = await response.json();

      if (response.status === 200)
        dispatch({
          type: types.getArticlesSuccess,
          payload: {...result, pageNumber}
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