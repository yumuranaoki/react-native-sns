export const fetchPost = () => {
  return dispatch => {
    fetch('http://localhost:3000/posts')
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        console.log(response);
        return response;
      })
      .then(response => response.json())
      .then(response => dispatch(fetchPostSuccess(response)));
  };
};

export const fetchPostSuccess = response => ({
  type: 'FETCH_POST_SUCCESS',
  response
});
