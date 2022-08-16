import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

export default function BookList() {
  const booklist = useSelector((state) => state.books);

  return (
    <div className="list-container">
      <h3>Book List</h3>
      <ul>
        {booklist.map((book) => (
          <BookItem
            key={book.id}
            title={book.title}
            author={book.author}
            id={book.id}
          />
        ))}
      </ul>
    </div>
  );
}
