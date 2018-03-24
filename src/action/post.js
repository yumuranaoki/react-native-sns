//actionを記述
export const pressPostButton = (place, content) => {
  return dispatch => {
    fetch('http://localhost:3000/post', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        place,
        content,
      }),
    })
    .then(() => dispatch(successPost()));
  };
};

export const successPost = () => ({
  type: 'SUCCESS_POST'
});
