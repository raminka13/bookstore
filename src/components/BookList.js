import React from 'react';
import BookItem from './BookItem';

export default function BookList(props) {
  const propsAr = props;
  return (
    <ul>
      {propsAr.books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
        />
      ))}
    </ul>
  );
}
