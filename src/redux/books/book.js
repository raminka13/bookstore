const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE = 'bookstore/books/REMOVE';

const booksReducer = (action, state = []) => {
  let booksArray;
  switch (action.type) {
    case ADD_BOOK:
      booksArray = [...state, action.book];
      return booksArray;
    case REMOVE:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length),
      ];
    default:
      return state;
  }
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (index) => ({
  type: REMOVE,
  index,
});

export default booksReducer;
