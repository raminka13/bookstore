import React from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

function Books() {
  return (
    <div className="app-container">
      <BookList />
      <BookForm />
    </div>
  );
}

export default Books;
