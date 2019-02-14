import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default class LoginBox extends React.Component {
  render() {
    return (
      <View>
        <Text>Login into the App</Text>
        <TextInput />
        <TextInput />
      </View>
    )
  }
}
