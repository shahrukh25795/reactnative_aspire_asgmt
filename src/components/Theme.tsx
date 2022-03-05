import {StatusBar, View} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../utils/globalStyles';
interface ThemeProps {
  children: ReactNode;
}

const Theme = (props: ThemeProps) => {
  return (
    <View style={[globalStyles.flex1, globalStyles.themeBackground]}>
      <StatusBar barStyle="light-content" />
      {props?.children}
    </View>
  );
};

export default Theme;
