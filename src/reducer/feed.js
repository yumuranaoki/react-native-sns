const initialState = {
  post: [{ place: 'place', content: 'content' }]
};

const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POST_SUCCESS':
      console.log('success!');
      console.log(action.response);
      return Object.assign({}, state, { post: action.response });
    default:
      return state;
  }
};

export default feedReducer;
