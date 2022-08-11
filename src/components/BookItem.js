import React from 'react';

export default function BookItem(props) {
  const propsAr = props;
  const { id, title, author } = propsAr.book;

  return (
    <li>
      <h5>{id}</h5>
      <h3>{title}</h3>
      <h4>{author}</h4>
      <button type="button">Delete</button>
    </li>
  );
}
