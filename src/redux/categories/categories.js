const CHECK = 'bookstore/books/CHECK';

export default function categoriesReducer(state = [], action = {}) {
  switch (action.type) {
    case CHECK:
      return action.payload;
    default:
      return state;
  }
}

export function checkStatus() {
  return { type: CHECK, payload: 'Under Construction' };
}
