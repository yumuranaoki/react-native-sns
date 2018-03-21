import { StackNavigator } from 'react-navigation';
import PostConnected from './container/post';
import PostImage from './component/post/image';

const Post = StackNavigator({
  Post: { screen: PostConnected },
  Image: { screen: PostImage },
});

export default Post;
