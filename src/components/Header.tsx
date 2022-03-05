import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {globalStyles} from '../utils/globalStyles';
import {images} from '../utils/assets';
import {colors} from '../utils/colors';
import {STRING_CONSTANTS} from '../utils/stringConstants';

const Header = () => {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        globalStyles.headerHeight,
        globalStyles.add_standard_horizontal_padding,
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
      <View style={[globalStyles.RFC, globalStyles.amtContainer]}>
        <View style={globalStyles.amountWrap}>
          <Text style={globalStyles.amtSyb}>{STRING_CONSTANTS.symbRsText}</Text>
        </View>
        <Text style={globalStyles.amt}>{STRING_CONSTANTS.amountText}</Text>
      </View>
    </View>
  );
};

export default Header;
