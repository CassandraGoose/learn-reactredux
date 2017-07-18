// Set up your root reducer here...
import { combineReducers } from 'redux';
import booksReducer from './bookReducer'
import books from './bookReducer'
import * as bookActions from '../actions/bookActions'
import configureStore from '../store/configureStore'

const store = configureStore()

store.dispatch(bookActions.fetchBooks())

 export default combineReducers({
   books: booksReducer
 })
