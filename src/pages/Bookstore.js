import React from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

export default function Bookstore() {
  const books = [{
    id: 1,
    title: 'Mathematics is music',
    author: 'James Joseph',
  },
  {
    id: 2,
    title: 'Music is Mathematics',
    author: 'Joseph James ',
  }];
  return (
    <div>
      <BookList books={books} />
      <BookForm />
    </div>
  );
}
