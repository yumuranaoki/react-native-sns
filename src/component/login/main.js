import React from 'react';
import { View, Text } from 'react-native';
import Button from '../common/button';
import TextInputs from '../common/textinputs';

class Login extends React.Component {
  render() {
    const styles = {
      view: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150
      },
      text: {
        fontSize: 20,
      },
      emphasis: {
        fontWeight: 'bold',
        fontSize: 28
      }
    };

    return (
      <View>
        <View style={styles.view}>
          <Text style={styles.text}>
            <Text style={styles.emphasis}>Tripit!{"\n"}</Text>
            旅の記録を残そう
          </Text>
        </View>
        <TextInputs insideInput="email" />
        <TextInputs insideInput="password" />
        <Button insideButton="login" />
      </View>
    );
  }
}

export default Login;
