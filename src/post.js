import { StackNavigator } from 'react-navigation';
import PostConnected from './container/post';
import PostImagesConnected from './container/postImage';

const Post = StackNavigator({
  Post: { screen: PostConnected },
  Image: { screen: PostImagesConnected },
});

export default Post;
