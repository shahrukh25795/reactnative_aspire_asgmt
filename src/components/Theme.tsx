import {StatusBar, View} from 'react-native';
import React, {ReactNode} from 'react';
import {styles} from '../utils/style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface ThemeProps {
  children: ReactNode;
}

const Theme = (props: ThemeProps) => {
  const {top} = useSafeAreaInsets();

  return (
    <View
      style={[styles.flex1, styles.themeBackground, {paddingTop: 20 + top}]}>
      <StatusBar barStyle="light-content" />
      {props?.children}
    </View>
  );
};

export default Theme;
