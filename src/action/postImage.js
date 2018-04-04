export const selectImages = image => ({
  type: 'SELECT_IMAGES',
  image
});

export const getBase64 = base64 => ({
  type: 'GET_BASE64',
  base64
});
