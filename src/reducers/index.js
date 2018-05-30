import { combineReducers } from 'redux'
import booksReducer from './reducer_books'
import singleBookReducer from './reducer_single_book'
import bookModalReducer from './reducer_book_modal'
import confrimModalReducer from './reducer_confirm_modal'

const rootReducer = combineReducers({
  books: booksReducer,
  selectedBook: singleBookReducer,
  bookModal: bookModalReducer,
  confirmModal: confrimModalReducer
});

export default rootReducer;
