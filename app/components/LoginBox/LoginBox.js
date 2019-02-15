import React from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

import styles from './styles';

const user = { username: 'roit', password: '123456' };

export default class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      username: '',
      password: ''
    };
  }
  componentDidMount() {
    const userInfo = user || this.fetchUser();
    this.setState({ user: userInfo });
  }
  render() {
    return (
      <View style={styles.loginBox}>
        <Text style={styles.header}>Login into the App</Text>
        <TextInput
          style={styles.input}
          placeholder="Username or Email"
          onChangeText={text => this.setState({ username: text })}
          autoCapitalize='none'
        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Password"
          onChangeText={text => this.setState({ password: text })}
          autoCapitalize='none'
        />
        <Button title="Login" onPress={this.validateLogin} />
      </View>
    );
  }

  validateLogin = () => {
    if (this.state.username !== this.state.user.username) {
      Alert.alert('Login Error','Invalid Username');
    } else if (this.state.password !== this.state.password) {
      Alert.alert('Login Error','Invalid Password');
    }else {
      this.props.login();
    }
  };

  fetchUser = () => {};
}
