import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import styles from './styles';

export default class LoginBox extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>Login into the App</Text>
        <TextInput style={styles.input} />
        <TextInput secureTextEntry={true} style={styles.input} />
        <Button title="Login" />
      </View>
    );
  }
}
