import {createStackNavigator, createAppContainer } from 'react-navigation';

import LoginView from '../screens/Login';

const StackNavigator = createStackNavigator({
  Login: {
    screen: LoginView,
  }
})

const AppNavigator = createAppContainer(StackNavigator);

export default AppNavigator;
