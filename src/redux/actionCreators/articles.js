import types from './types';
import dotenv from 'dotenv';

dotenv.config();
const API_URL = `http://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_API_KEY}&sortBy=popularity&pageSize=20&country=us&page=`;// eslint-disable-line
const SEARCH_API_URL = `http://newsapi.org/v2/everything?apiKey=${process.env.REACT_APP_API_KEY}&sortBy=popularity&pageSize=20&page=`;// eslint-disable-line

export function getArticles(pageNumber) {
	return async dispatch => {
		dispatch({
			type: types.getArticlesRequest
		});
		try {
			const response = await fetch(API_URL+pageNumber)
			const result = await response.json();

			if (response.status === 200)
				dispatch({
					type: types.getArticlesSuccess,
					payload: {result, pageNumber}
				});
			else throw new Error();
		} catch (error) {
			dispatch({ type: types.getArticlesFailure });
		}
	};
}

export function searchArticles(pageNumber, searchQuery) {
	return async dispatch => {
		dispatch({
			type: types.searchArticlesRequest
		});
		try {
			const response = await fetch(`${SEARCH_API_URL+pageNumber}&q=${searchQuery}`);
			const result = await response.json();

			if (response.status === 200)
				dispatch({
					type: types.searchArticlesSuccess,
					payload: {result, searchQuery, pageNumber}
				});
			else throw new Error();
		} catch (error) {
			dispatch({ type: types.searchArticlesFailure });
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