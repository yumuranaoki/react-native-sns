import { TabNavigator } from 'react-navigation';
import Feed from './component/feed/main';
import PostConnected from './container/post';
import Profile from './component/profile/main';


const Tabs = TabNavigator(
  {
    Feed: { screen: Feed },
    Post: { screen: PostConnected },
    Profile: { screen: Profile },
  },
  {
    swipeEnabled: false
  }
);

export default Tabs;
