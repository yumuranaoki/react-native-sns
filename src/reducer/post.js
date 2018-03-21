const postReducer = (state = [], action) => {
  switch (action.type) {
    case 'SUCCESS_POST':
      console.log('success!');
      return state;
    default:
      return state;
  }
};

export default postReducer;
