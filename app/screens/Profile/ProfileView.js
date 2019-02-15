import React from 'react';
import { View, Button, AsyncStorage } from 'react-native';

import styles from './styles';
import cameraPermissioonHandler from '../../utils/Handlers/cameraPermissioonHandler';
import locationPermissionHandler from '../../utils/Handlers/locationPermissionHandler';

export default class ProfileView extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.box}>
          <Button title="View Dashboard" onPress={this.navigateToDashboard} />
        </View>
        <View style={styles.box}>
          <Button title="Get My Location" onPress={this.getLocation} />
        </View>
        <View style={styles.box}>
          <Button title="Upload Picture" onPress={this.getCameraAccess} />
        </View>
        <View style={styles.box}>
          <Button title="Sign out" onPress={this.logout} />
        </View>
      </View>
    );
  }

  getCameraAccess = async () => {
    if (await cameraPermissioonHandler()) {
      console.warn('open Camera');
    }else {
      console.warn('Permission Denied');
    }
  };

  getLocation = async () => {
    if (await locationPermissionHandler()) {
      navigator.geolocation.getCurrentPosition(pos => {
        console.log(pos);
      });
    }else {
      console.warn('Permission Denied');
    }
  };

  logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('SignedOut');
  };

  navigateToDashboard = () => {
    this.props.navigation.navigate('Dashboard');
  };
}
