import {StatusBar, View} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../utils/globalStyles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface ThemeProps {
  children: ReactNode;
}

const Theme = (props: ThemeProps) => {
  const {top} = useSafeAreaInsets();

  return (
    <View
      style={[
        globalStyles.flex1,
        globalStyles.themeBackground,
        {paddingTop: 10 + top},
      ]}>
      <StatusBar barStyle="light-content" />
      {props?.children}
    </View>
  );
};

export default Theme;
