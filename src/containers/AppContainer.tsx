import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from '../navigation';

const AppContainer = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};
export default AppContainer;
