import React from 'react';
import { AsyncStorage } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';

import LoginView from '../screens/Login';
import DashboardView from '../screens/Dashboard';
import ProfileView from '../screens/Profile';
import AuthLoading from '../screens/AuthLoading';

const StackNavigator = createStackNavigator({
  Profile: {
    screen: ProfileView,
  },
  Dashboard: {
    screen: DashboardView
  }
},
{
  initialRouteName: 'Dashboard',
}
);

const SignedOutStackNavigator = createStackNavigator({
  SignIn: {
    screen: LoginView
  }
});


  const Navigator =  createSwitchNavigator(
    {
      AuthLoading: {
        screen: AuthLoading,
      },
      SignedIn: {
        screen: StackNavigator,
        navigationOptions: {
          header: null,
        }
      },
      SignedOut: {
        screen: SignedOutStackNavigator,
        navigationOptions: {
          header: null,
        }
      },
    },
    {
      initialRouteName: 'AuthLoading'
    }
  );


const AppNavigator = createAppContainer(Navigator);

export default AppNavigator;
