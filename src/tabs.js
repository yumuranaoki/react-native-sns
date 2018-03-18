import { TabNavigator } from 'react-navigation';
import Feed from './component/feed/main';
import Post from './component/post/main';
import Profile from './component/profile/main';


const Tabs = TabNavigator(
  {
    Feed: { screen: Feed },
    Post: { screen: Post },
    Profile: { screen: Profile },
  },
  {
    swipeEnabled: false
  }
);

export default Tabs;
