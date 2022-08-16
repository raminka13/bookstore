import { useState, React } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { createBook } from '../redux/books/book';

function Form() {
  const [titleInput, setTitleInput] = useState('');
  const [authorInput, setAuthorInput] = useState('');
  const dispatch = useDispatch();
  return (
    <div className="form-container">
      <h3>Add new book</h3>
      <form>
        <input
          type="text"
          name="title"
          value={titleInput}
          placeholder="Book Title"
          onInput={(e) => setTitleInput(e.target.value)}
        />
        <input
          type="text"
          name="author"
          value={authorInput}
          placeholder="Author Title"
          onInput={(e) => setAuthorInput(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            if (titleInput === '' && authorInput === '') {
              return;
            }
            dispatch(createBook({ title: titleInput, author: authorInput, id: nanoid() }));
            setTitleInput('');
            setAuthorInput('');
          }}
          type="submit"
        >
          Add New Book
        </button>
      </form>
    </div>
  );
}

export default Form;
