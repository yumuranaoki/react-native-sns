//actionを記述
export const pressPostButton = detail => {
  fetch('http://localhost:3000/post', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      detail,
    }),
  })
  .then(() => dispatch(successPost()));
};

export const successPost = () => {
  return {
    type: 'SUCCESS_POST'
  };
};
