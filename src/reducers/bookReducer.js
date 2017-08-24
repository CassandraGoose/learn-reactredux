import actionTypes from '../actions/bookActions'

export const booksReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK_SUCCESS':
      return [
        ...state,
        Object.assign({}, action.book)
      ];
    case 'FETCH_BOOKS_SUCCESS':
      return action.books;
    default:
      return state
  }
}

export const bookReducer = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_BY_ID_SUCCESS':
      return action.book
     case 'DELETE_BOOK_SUCCESS':
     return action.books
    default:
      return state
  }
}
