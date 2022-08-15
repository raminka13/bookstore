const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE = 'bookstore/books/REMOVE';

const defaultState = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
  },
];

const booksReducer = (action, state = defaultState) => {
  let booksArray;
  switch (action.type) {
    case ADD_BOOK:
      booksArray = [...state, action.book];
      return booksArray;
    case REMOVE:
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (book) => ({
  type: REMOVE,
  book,
});

export default booksReducer;
