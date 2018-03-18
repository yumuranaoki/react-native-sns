//stateとactionに応じた処理を実装
const reducer = (state, action) => {
  switch (action.type) {
    case 'SUCCESS_POST':
      console.log('success!');
      break;
    default:
      return state;
  }
};

export default reducer;
