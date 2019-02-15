import React from 'react';
import { View, AsyncStorage } from 'react-native';

import LoginBox from '../../components/LoginBox';

import styles from './styles';

export default class LoginView extends React.Component {
  static navigationOptions = {
    header: null
  };
  
  render() {
    return (
      <View style={styles.loginWrapper}>
        <LoginBox login={this.login} />
      </View>
    );
  }

  login = async () => {
    await AsyncStorage.setItem('token','roit');
    this.props.navigation.navigate('SignedIn');
    
  };
}
