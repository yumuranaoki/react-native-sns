import { TabNavigator } from 'react-navigation';
import FeedConnected from './container/feed';
import PostConnected from './container/post';
import Profile from './component/profile/main';


const Tabs = TabNavigator(
  {
    Feed: { screen: FeedConnected },
    Post: { screen: PostConnected },
    Profile: { screen: Profile },
  },
  {
    swipeEnabled: false
  }
);

export default Tabs;
