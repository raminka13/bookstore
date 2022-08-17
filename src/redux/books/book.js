import axios from 'axios';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const GET = 'bookstore/books/GET';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/uYBWkn6JQUP0zZxaMqGp/books';

export default function booksReducer(state = [], action = {}) {
  switch (action.type) {
    case GET:
      return action.book;
    case ADD:
      return state.concat(action.book);
    case REMOVE:
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
}
export const getBook = (book) => ({
  type: GET,
  book,
});

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

export const addNewBookApi = (book) => async (dispatch) => {
  const {
    title,
    author,
    id,
    category,
  } = book;
  const newBook = {
    item_id: id,
    title,
    author,
    category,
  };
  await axios.post(baseURL, newBook);
  dispatch(createBook(book));
};

export const getBooksToDisplayApi = () => async (dispatch) => {
  const books = await axios.get(baseURL);
  const objectOfBooks = Object.entries(books.data).map(([id, book]) => {
    const { title, author, category } = book[0];
    return {
      id, title, author, category,
    };
  });
  dispatch(getBook(objectOfBooks));
};

export const removeBookFromApi = (id) => async (dispatch) => {
  await axios.delete(`${baseURL}/${id.id}`);
  dispatch(removeBook(id));
};
