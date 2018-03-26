//actionを記述
export const pressPostButton = (place, content, selectedImages) => {
  return dispatch => {
    const text = JSON.stringify({
      place,
      content,
    });
    const imageData = new FormData();
    imageData.append('post', text);
    selectedImages.forEach(image => {
      imageData.append('image', {
        uri: image.uri,
        type: 'image/jpg',
        name: image.filename,
      });
    });
    fetch('http://localhost:3000/post', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: imageData,
    })
    .then(response => console.log(response))
    .then(() => dispatch(successPost()));
  };
};

export const successPost = () => ({
  type: 'SUCCESS_POST'
});
