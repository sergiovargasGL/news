import types from '../actionCreators/types';

const initialState = {
  isLoading: false,
  elements: [],
  response: {},
  error: false
}

const articles = (state = initialState, action) => {
  switch (action.type) {
    case types.getArticlesRequest:
      return {
        ...state,
        loading: true
      };
    case types.getArticlesSuccess:
      return {
        ...state,
        loading: false,
        elements: action.payload.articles,
        response: action.payload
      };
    case types.getArticlesFailure:
      return {
        ...state,
        error: true
      };
    case types.filterArticles:
      const filter= action.payload;
      const filteredElements= filter ? 
        state.response.articles.filter(article => article.source.name.toLowerCase().includes(filter.toLowerCase())) :
        state.response.articles;
      return {
        ...state,
        elements: filteredElements
      }
    default:
      return state;
  }
};

export default articles;