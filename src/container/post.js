//stateとdispatchをpropsに紐付け
import { connect } from 'react-redux';
import Post from '../component/post/main';
import { pressPostButton } from '../action/post';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  pressPostButton: detail => dispatch(pressPostButton(detail))
});

const PostConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);

export default PostConnected;
