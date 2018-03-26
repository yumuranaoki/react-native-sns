//stateとdispatchをpropsに紐付け
import { connect } from 'react-redux';
import Post from '../component/post/main';
import { pressPostButton } from '../action/post';

const mapStateToProps = state => ({
  selectedImages: state.postImages.selectedImages
});

const mapDispatchToProps = dispatch => ({
  pressPostButton: (place, content, selectedImages) => {
    dispatch(pressPostButton(place, content, selectedImages));
  }
});

const PostConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);

export default PostConnected;
