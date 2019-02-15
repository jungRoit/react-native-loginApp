import React from 'react';
import { View, Text, AsyncStorage } from 'react-native';

export default class AuthLoading extends React.Component {
  constructor(props){
    super(props);
    this.checkifLoggedIn();
  }

  checkifLoggedIn = async () => {
    const userToken = await AsyncStorage.getItem('token');

    this.props.navigation.navigate(userToken? 'SignedIn': 'SignedOut');
  }

render() {
return (
<View>
  <Text>Loading</Text>
</View>
);
}
}
