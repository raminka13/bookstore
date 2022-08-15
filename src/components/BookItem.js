import React from 'react';
import PropTypes from 'prop-types';
import './BookItem.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/book';

export default function BookItem(props) {
  const { id, title, author } = props;
  const dispatch = useDispatch();

  return (
    <li key={id} className="book-wrapper">
      <span className="title">{title}</span>
      <span className="author">{author}</span>
      <button
        type="button"
        className="del-button"
        onClick={() => {
          dispatch(removeBook({ id }));
        }}
      >
        Delete
      </button>
    </li>
  );
}

BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
