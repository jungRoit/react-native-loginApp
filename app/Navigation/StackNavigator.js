import {createStackNavigator, createAppContainer } from 'react-navigation';

import LoginView from '../screens/Login';
import DashboardView from '../screens/Dashboard';

const StackNavigator = createStackNavigator({
  Login: {
    screen: LoginView,
  },
  Dashboard: {
    screen: DashboardView,
  }
})

const AppNavigator = createAppContainer(StackNavigator);

export default AppNavigator;
