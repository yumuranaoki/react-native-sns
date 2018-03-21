import { TabNavigator } from 'react-navigation';
import FeedConnected from './container/feed';
import Post from './post';
import Profile from './component/profile/main';

const Tabs = TabNavigator(
  {
    Feed: { screen: FeedConnected },
    Post: { screen: Post },
    Profile: { screen: Profile },
  },
  {
    swipeEnabled: false
  }
);

export default Tabs;
