import { nanoid } from '@reduxjs/toolkit';

const defaultState = [
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    id: nanoid(),
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    id: nanoid(),
  },
];

const ADD = 'booktore/books/ADD';
const REMOVE = 'boostore/books/REMOVE';

export default function booksReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case ADD:
      return state.concat(action.book);
    case REMOVE:
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
}

export function createBook(book) {
  return {
    type: ADD,
    book,
  };
}

export function removeBook(book) {
  return {
    type: REMOVE,
    book,
  };
}
