import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import booksReducer from './books/book';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
