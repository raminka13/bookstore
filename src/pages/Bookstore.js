import React from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

export default function Bookstore() {
  const books = [{
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
  }];
  return (
    <div className="books-container">
      <BookList books={books} />
      <BookForm />
    </div>
  );
}
