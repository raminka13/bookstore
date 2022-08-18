import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { removeBookFromApi } from '../redux/books/book';
import './BookItem.css';

function CircularProgressWithLabel(props) {
  /* eslint-disable */
  return <CircularProgress variant="determinate" {...props} size={"80px"} />;
  /* eslint-enable */
}

export function CircularStatic() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    setProgress(30 + (Math.floor(Math.random() * 10)));
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}

function Book(props) {
  const {
    id, title, author, category,
  } = props;
  const dispatch = useDispatch();

  return (
    <li className="book-wrapper" id={id}>
      <div className="left-container">
        <div className="book-group">
          <span className="category">{category}</span>
          <span className="title">{title}</span>
          <span className="author">{author}</span>
        </div>
        <div className="button-group">
          <button type="button" className="com-button" disabled>
            Comments
          </button>
          <button
            className="del-button"
            onClick={() => {
              dispatch(removeBookFromApi({ id }));
            }}
            type="button"
          >
            Remove
          </button>
          <button type="button" className="edit-button" disabled>
            Edit
          </button>
        </div>
      </div>
      <div className="middle-container">
        <CircularStatic />
        <div className="completed-progress">
          <span className="percentage">
            {Math.floor(Math.random() * 101)}
            %
          </span>
          <span className="text-complete">Completed</span>
        </div>
      </div>
      <div className="right-container">
        <span className="current-chapter">Current Chapter</span>
        <span className="chapter">
          Chapter
          {' '}
          {Math.floor(Math.random() * 101)}
        </span>
        <button type="button" className="progress-button" disabled>
          Update Progress
        </button>
      </div>
    </li>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
