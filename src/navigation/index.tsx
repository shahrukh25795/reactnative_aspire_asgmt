import 'react-native-gesture-handler';
import React from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationConstants} from '../utils/navigationConstants';
import MainTabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const NavigationFunc = () => {
  const navigator = createNavigationContainerRef();

  return (
    <NavigationContainer ref={navigator}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={navigationConstants.bottom_tab_bar_stack}
          component={MainTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationFunc;
