import React from 'react';
import { View, } from 'react-native';
import Header from '../common/header';
import Test from '../test/main';

class Profile extends React.Component {
  render() {
    return (
      <View>
        <Header title="Profile" />
        <Test />
      </View>
    );
  }
}

export default Profile;
