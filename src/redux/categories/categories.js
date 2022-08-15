const CHECK_STATUS = 'CHECK_STATUS';

const categoriesReducer = (action, state = '') => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

export default categoriesReducer;
