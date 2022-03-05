import {View, Text} from 'react-native';
import React from 'react';
import Theme from '../components/Theme';
import {globalStyles} from '../utils/globalStyles';
import {STRING_CONSTANTS} from '../utils/stringConstants';

const Dummy = () => {
  return (
    <Theme>
      <View style={[globalStyles.flex1, globalStyles.centerContent]}>
        <Text style={globalStyles.testingTextStyle}>
          {STRING_CONSTANTS.testingText}
        </Text>
      </View>
    </Theme>
  );
};

export default Dummy;
