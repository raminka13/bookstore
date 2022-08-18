import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from './BookItem';
import { getBooksToDisplayApi } from '../redux/books/book';

export default function BookList() {
  const booklist = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksToDisplayApi(booklist));
  }, [dispatch]);

  return (
    <div className="list-container">
      <ul>
        {booklist.map((book) => (
          <BookItem
            key={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
            id={book.id}
          />
        ))}
      </ul>
    </div>
  );
}
