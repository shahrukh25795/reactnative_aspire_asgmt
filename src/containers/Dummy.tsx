import {View, Text} from 'react-native';
import React from 'react';
import Theme from '../components/Theme';
import {styles} from '../utils/style';
import {STRING_CONSTANTS} from '../utils/stringConstants';

const Dummy = () => {
  return (
    <Theme>
      <View style={[styles.flex1, styles.centerContent]}>
        <Text style={styles.testingTextStyle}>
          {STRING_CONSTANTS.testingText}
        </Text>
      </View>
    </Theme>
  );
};

export default Dummy;
