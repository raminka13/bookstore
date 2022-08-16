import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div className="categories-container">
      <h2>{categories}</h2>
      <button
        onClick={() => {
          dispatch(checkStatus());
        }}
        type="button"
      >
        Check Status
      </button>
    </div>
  );
}

export default Categories;
