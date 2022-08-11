import React from 'react';

export default function BookForm() {
  return (
    <form className="input-form">
      <input
        type="text"
        className="input-title"
        placeholder="Book Title"
        name="title"
      />
      <input
        type="text"
        className="input-author"
        placeholder="Author"
        name="author"
      />
      <button type="submit" className="input-submit">
        Add Book
      </button>
    </form>
  );
}
