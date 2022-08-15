import React from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

export default function Bookstore() {
  return (
    <div className="books-container">
      <BookList />
      <BookForm />
    </div>
  );
}
