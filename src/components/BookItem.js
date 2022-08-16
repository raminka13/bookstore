import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/book';
import './BookItem.css';

function Book(props) {
  const { id, title, author } = props;
  const dispatch = useDispatch();
  return (
    <li className="book-wrapper" id={id}>
      <span className="title">{title}</span>
      <span className="author">{author}</span>
      <button
        className="del-button"
        onClick={() => {
          dispatch(removeBook({ id }));
        }}
        type="button"
      >
        Delete
      </button>
    </li>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
