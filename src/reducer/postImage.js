const initialState = {
  selectedImages: [],
  base64: ''
};

const postImagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_IMAGES': {
      const selectedImages = state.selectedImages;
      const position = selectedImages.indexOf(action.image);
      if (position === -1) {
        selectedImages.push(action.image);
      } else {
        selectedImages.splice(position, 1);
      }
      console.log(selectedImages);
      return Object.assign({}, state, { selectedImages });
    }
    case 'GET_BASE64': {
      return Object.assign({}, state, { base64: action.base64 });
    }
    default:
      return state;
  }
};

export default postImagesReducer;
