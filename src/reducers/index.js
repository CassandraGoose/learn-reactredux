// Set up your root reducer here...
import { combineReducers } from 'redux';
import {booksReducer, bookReducer} from './bookReducer'
import * as bookActions from '../actions/bookActions'
import configureStore from '../store/configureStore'


 export default combineReducers({
   books: booksReducer,
   book: bookReducer
 })
