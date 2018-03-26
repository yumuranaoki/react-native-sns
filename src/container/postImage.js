import { connect } from 'react-redux';
import PostImage from '../component/post/image';
import { selectImages } from '../action/postImage';

const mapStateToProps = state => ({
  selectedImages: state.postImages.selectedImages
});

const mapDispatchToProps = dispatch => ({
  selectImages: image => dispatch(selectImages(image))
});

const PostImagesConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostImage);

export default PostImagesConnected;
