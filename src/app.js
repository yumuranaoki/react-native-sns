import React from 'react';
import { View, Text } from 'react-native';
import Button from './component/common/button';

class App extends React.Component {
  render() {
    return (
      <View>
        <Text>an App</Text>
        <Button insideButton="login" />
      </View>
    );
  }
}

export default App;
