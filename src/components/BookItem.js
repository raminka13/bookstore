import React from 'react';
import './BookItem.css';

export default function BookItem(props) {
  const propsAr = props;
  const { id, title, author } = propsAr.book;

  return (
    <li key={id} className="book-wrapper">
      <span className="title">{title}</span>
      <span className="author">{author}</span>
      <button type="button" className="del-button">Delete</button>
    </li>
  );
}
