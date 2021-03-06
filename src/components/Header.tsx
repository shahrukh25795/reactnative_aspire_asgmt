import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {globalStyles} from '../utils/globalStyles';
import {images} from '../utils/assets';
import {colors} from '../utils/colors';
import {STRING_CONSTANTS} from '../utils/stringConstants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Amount from './Amount';

const Header = () => {
  const {top} = useSafeAreaInsets();

  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        globalStyles.headerHeight,
        globalStyles.add_standard_horizontal_padding,
        {marginTop: 10 + top},
      ]}>
      <View style={globalStyles.RSC}>
        <Text style={globalStyles.headerText}>
          {STRING_CONSTANTS.debitCardText}
        </Text>
        <Image style={{tintColor: colors.green}} source={images.home_icon} />
      </View>
      <Text style={globalStyles.avlBalance}>
        {STRING_CONSTANTS.availableBalanceText}
      </Text>
      <Amount color={colors.white} amount={STRING_CONSTANTS.amountText} />
    </View>
  );
};

export default Header;
