import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {navigationConstants} from '../utils/navigationConstants';
import {Image, Text} from 'react-native';
import {tabBarMenu} from '../utils/preConfig';
import {styles} from '../utils/style';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={navigationConstants.cards_screen}
      screenOptions={{headerShown: false}}>
      {tabBarMenu?.map((item, index) => (
        <Tab.Screen
          key={index}
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={[
                  styles.tabLabelStyle,
                  focused && styles.activeLabelColor,
                ]}>
                {item?.label}
              </Text>
            ),
            tabBarIcon: ({focused}) => (
              <Image
                style={[styles.tabIconStyle, focused && styles.activeIconStyle]}
                source={item?.image}
              />
            ),
          }}
          name={item?.route}
          component={item?.component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
