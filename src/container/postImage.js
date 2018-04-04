import { connect } from 'react-redux';
import PostImage from '../component/post/image';
import { selectImages, getBase64 } from '../action/postImage';

const mapStateToProps = state => ({
  selectedImages: state.postImages.selectedImages,
  base64: state.postImages.base64,
});

const mapDispatchToProps = dispatch => ({
  selectImages: image => dispatch(selectImages(image)),
  getBase64: base64 => dispatch(getBase64(base64)),
});

const PostImagesConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostImage);

export default PostImagesConnected;
