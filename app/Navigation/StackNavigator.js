import {createStackNavigator, createAppContainer } from 'react-navigation';

const StackNavigator = createStackNavigator({
  Login: {
    screen: LoginView,
  }
})

const AppNavigator = createAppContainer(StackNavigator);

export default AppNavigator;
