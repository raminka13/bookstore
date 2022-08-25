import { useState, React } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addNewBookApi } from '../redux/books/book';
import './BookForm.css';

function Form() {
  const [titleInput, setTitleInput] = useState('');
  const [authorInput, setAuthorInput] = useState('');
  const dispatch = useDispatch();
  const id = nanoid();
  const category = 'Fiction';

  return (
    <div className="form-container">
      <h3>Add new book</h3>
      <form id="form">
        <input
          id="title-input"
          type="text"
          name="title"
          maxLength={18}
          value={titleInput}
          placeholder="Book Title"
          onInput={(e) => setTitleInput(e.target.value)}
        />
        <input
          id="author-input"
          type="text"
          name="author"
          maxLength={18}
          value={authorInput}
          placeholder="Author Title"
          onInput={(e) => setAuthorInput(e.target.value)}
        />
        <button
          id="add-button"
          onClick={(e) => {
            e.preventDefault();
            if (titleInput === '' || authorInput === '') {
              return;
            }
            dispatch(
              addNewBookApi({
                title: titleInput,
                author: authorInput,
                id,
                category,
              }),
            );
            setTitleInput('');
            setAuthorInput('');
          }}
          type="submit"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default Form;
