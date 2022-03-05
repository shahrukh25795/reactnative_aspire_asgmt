import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {navigationConstants} from '../utils/navigationConstants';
import {Image, Text} from 'react-native';
import {tabBarMenu} from '../utils/preConfig';
import {globalStyles} from '../utils/globalStyles';

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
                  globalStyles.tabLabelStyle,
                  focused && globalStyles.activeLabelColor,
                ]}>
                {item?.label}
              </Text>
            ),
            tabBarIcon: ({focused}) => (
              <Image
                style={[
                  globalStyles.tabIconStyle,
                  focused && globalStyles.activeIconStyle,
                ]}
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
