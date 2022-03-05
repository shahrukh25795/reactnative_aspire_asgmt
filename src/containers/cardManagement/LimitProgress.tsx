import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {STRING_CONSTANTS} from '../../utils/stringConstants';
import {globalStyles} from '../../utils/globalStyles';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';

const LimitProgress = () => {
  return (
    <View style={styles.main}>
      <View style={globalStyles.RSC}>
        <Text style={styles.text}>
          {STRING_CONSTANTS.debitCardSpendingLimitText}
        </Text>
        <View style={globalStyles.RFC}>
          <Text style={styles.amount}>$345</Text>
          <View style={styles.line} />
          <Text style={styles.desc}>$55,000</Text>
        </View>
      </View>
      <View style={styles.progressWrap}>
        <View style={styles.fill}>
          <View style={styles.tail} />
        </View>
      </View>
    </View>
  );
};

export default LimitProgress;

const styles = StyleSheet.create({
  main: {
    marginTop: 25,
  },
  line: {
    backgroundColor: colors.grey,
    height: 15,
    width: 1,
    marginHorizontal: 10,
  },
  desc: {
    fontFamily: fonts.primary_regular_font,
    color: colors.greyLight,
    fontSize: 13,
  },
  amount: {
    fontFamily: fonts.primary_demi_bold_font,
    color: colors.green,
    fontSize: 13,
  },
  text: {
    fontFamily: fonts.primary_medium_font,
    color: colors.card_desc,
    fontSize: 13,
  },
  progressWrap: {
    backgroundColor: colors.progressBack,
    width: '100%',
    height: 15,
    marginTop: 8,
    borderRadius: 50,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: colors.green,
    width: 100,
  },
  tail: {
    position: 'absolute',
    height: 20,
    right: -5,
    backgroundColor: colors.green,
    width: 15,
    transform: [{rotate: '18deg'}],
    top: -3,
  },
});
