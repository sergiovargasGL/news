import types from '../actionCreators/types';

const initialState = {
  isLoading: false,
  elements: [],
  response: {},
  articlesToShow: 20,
  error: false,
  totalPages: 0,
  actualPage: 0
}

const articles = (state = initialState, action) => {
  switch (action.type) {
    case types.getArticlesRequest:
      return {
        ...state,
        loading: true
      };
    case types.getArticlesSuccess:
      const elements = action.payload.pageNumber > 1 ? [...state.elements, ...action.payload.articles] : action.payload.articles;
      return {
        ...state,
        loading: false,
        elements,
        response: action.payload,
        totalPages: Math.ceil(action.payload.totalResults / 20),
        actualPage: state.actualPage + 1
      };
    case types.getArticlesFailure:
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
      }
    default:
      return state;
  }
};

export default articles;