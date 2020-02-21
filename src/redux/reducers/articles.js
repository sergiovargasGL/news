/* eslint-disable no-case-declarations */
import types from '../actionCreators/types';

const initialState = {
	loading: false,
	elements: [],
	searchResults: [],
	response: {},
	error: false,
	totalPages: 0,
	searchQuery: ''
};

const articles = (state = initialState, action) => {
	switch (action.type) {
	case types.getArticlesRequest:
	case types.searchArticlesRequest:
		return {
			...state,
			loading: true
		};
	case types.getArticlesSuccess:
		const elements = action.payload.pageNumber > 1 ? [...state.elements, ...action.payload.result.articles] : action.payload.result.articles;
		return {
			...state,
			loading: false,
			elements,
			response: action.payload.result,
			totalPages: Math.ceil(action.payload.result.totalResults / 20),
		};
	case types.searchArticlesSuccess:
		const searchResults = action.payload.pageNumber > 1 ? [...state.elements, ...action.payload.result.articles] : action.payload.result.articles;
		return {
			...state,
			loading: false,
			elements: searchResults,
			response: action.payload.result,
			totalPages: Math.ceil(action.payload.result.totalResults / 20),
			searchQuery: action.payload.searchQuery
		};
	case types.getArticlesFailure:
	case types.searchArticlesFailure:
		return {
			...state,
			error: true,
			loading:false
		};
	case types.filterArticles:
		const filter= action.payload;
		const filteredElements= filter ? 
			state.response.articles.filter(article => article.source.name.toLowerCase().includes(filter.toLowerCase())) :
			state.response.articles;
		return {
			...state,
			elements: filteredElements
		};
       
	default:
		return state;
	}
};

export default articles;