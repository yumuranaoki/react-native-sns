import { connect } from 'react-redux';
import Feed from '../component/feed/main';
import { fetchPost } from '../action/feed';

const mapStateToProps = state => ({
  post: state.feed.post
});

const mapDispatchToProps = dispatch => ({
  fetchPost: () => dispatch(fetchPost())
});

const FeedConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);

export default FeedConnected;
