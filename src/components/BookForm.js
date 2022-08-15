import { useState, React } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addBook } from '../redux/books/book';

export default function BookForm() {
  const [titleInput, setTitleInput] = useState('');
  const [authorInput, setAuthorInput] = useState('');
  const dispatch = useDispatch();

  return (
    <form className="input-form">
      <h2>ADD NEW BOOK</h2>
      <input
        type="text"
        className="input-title"
        placeholder="Book Title"
        name="title"
        value={titleInput}
        onInput={(e) => setTitleInput(e.target.value)}
      />
      <input
        type="text"
        className="input-author"
        placeholder="Author"
        name="author"
        value={authorInput}
        onInput={(e) => setAuthorInput(e.target.value)}
      />
      <button
        type="submit"
        className="input-submit"
        onClick={() => {
          dispatch(addBook({ title: titleInput, author: authorInput, id: nanoid() }));
          setTitleInput('');
          setAuthorInput('');
        }}
      >
        Add Book
      </button>
    </form>
  );
}
