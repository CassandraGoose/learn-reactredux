import * as actionTypes from './actionTypes'
import Axios from 'axios'

const apiUrl = 'https://anime-stuff.herokuapp.com/'


export const fetchBooksSuccess = (books) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    books
  }
}

export const createBookSuccess = (book) => {
  return {
    type: 'CREATE_BOOK_SUCCESS',
    book
  }
}

export const deleteBookSuccess = (book) => {
  return {
    type: 'DELETE_BOOK_SUCCESS',
    book
  }
}

export const editBookSuccess = (book) => {
  return {
    type: 'EDIT_BOOK_SUCCESS',
    book
  }
}

export const fetchBookByIdSuccess = (book) => {
  return {
    type: 'FETCH_BOOKS_BY_ID_SUCCESS',
    book
  }
}

export const fetchBooks = () => {
  return (dispatch) => {
    return Axios.get(apiUrl)
      .then(response => {
        console.log(response.data);
        dispatch(fetchBooksSuccess(response.data))
      })
      .catch(error => {
        throw(error)
      })
  }
 }

export const createBook = (book) => {
  return(dispatch) => {
    return Axios.post(apiUrl, book)
      .then(response => {
        dispatch(createBookSuccess(response.data))
      })
      .catch(error => {
        throw(error)
      })
  }
}

export const deleteBook = (book) => {
  return(dispatch) => {
    return Axios.delete(apiUrl, book)
      .then(response => {
        dispatch(createBookSuccess(response.data))
      })
      .catch(error => {
        throw(error)
      })
  }
}

export const editBook = (bookId, book) => {
  return(dispatch) => {
    return Axios.patch(apiUrl + 'books/' + bookId + '/edit', book)
      .then(response => {
        dispatch(editBookSuccess(response.data))
      })
      .catch(error => {
        throw(error)
      })
  }
}

export const fetchBookById = (bookId) => {
  return (dispatch) => {
    return Axios.get(apiUrl + 'books/' + bookId)
      .then(response => {
        dispatch(fetchBookByIdSuccess(response.data))
      })
      .catch(error => {
        throw(error)
      })
  }
}
