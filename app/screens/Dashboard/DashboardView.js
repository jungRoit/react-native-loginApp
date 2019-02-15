import React from 'react';
import { View, Text, Button } from 'react-native';

export default class DashboardView extends React.Component {
  static navigationOptions = {
    header: null
  };
  
  render() {
    return (
      <View>
        <Text>Dashboard</Text>
        <Button title='Go to Profile' onPress={this.navigateToProfile} />
      </View>
    );
  }
  navigateToProfile = () => {
    this.props.navigation.navigate('Profile');
  }
}
