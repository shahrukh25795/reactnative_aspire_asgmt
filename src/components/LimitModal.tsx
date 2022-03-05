import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomSheet from './bottomSheet';
import Button from './Button';
import {STRING_CONSTANTS} from '../utils/stringConstants';
import {globalStyles} from '../utils/globalStyles';
import {images} from '../utils/assets';
import {fonts} from '../utils/fonts';
import {colors} from '../utils/colors';
import Amount from './Amount';
import {amountOptions} from '../utils/preConfig';

interface LimitModalProps {
  visible: boolean;
  onClose: () => void;
}

const RenderItem = ({item}: any) => {
  return (
    <View style={styles.amount}>
      <Text style={styles.amountText}>{item}</Text>
    </View>
  );
};

const LimitModal = (props: LimitModalProps) => {
  return (
    <BottomSheet
      initialTranslateY={500}
      visible={props?.visible}
      onClose={props?.onClose}>
      {() => {
        return (
          <View style={styles.main}>
            <View style={globalStyles.RFC}>
              <Image source={images.spend_limit} />
              <Text style={styles.text}>
                {STRING_CONSTANTS.setWeeklySpendingLimitText}
              </Text>
            </View>
            <Amount style={styles.margin_15} amount="$5000" />
            <View style={styles.line} />
            <Text style={styles.textDesc}>
              {STRING_CONSTANTS.setWeeklySpendingLimitDescText}
            </Text>
            <View style={[globalStyles.RFC, styles.amountWrap]}>
              {amountOptions.map(item => {
                return <RenderItem item={item} />;
              })}
            </View>
            <View style={styles.nullView} />
            <View style={styles.footerBtn}>
              <Button
                onPress={props?.onClose}
                label={STRING_CONSTANTS.saveText}
              />
            </View>
          </View>
        );
      }}
    </BottomSheet>
  );
};

export default LimitModal;

const styles = StyleSheet.create({
  main: {
    height: 200,
    paddingTop: 10,
  },
  text: {
    fontFamily: fonts.primary_medium_font,
    fontSize: 14,
    color: colors.card_desc,
    marginLeft: 15,
  },
  nullView: {
    minHeight: 210,
  },
  footerBtn: {
    paddingHorizontal: 40,
  },
  line: {
    backgroundColor: colors.grey,
    height: 0.5,
    width: '100%',
    marginTop: 8,
  },
  textDesc: {
    fontFamily: fonts.primary_regular_font,
    color: colors.amountDesc,
    fontSize: 13,
    marginTop: 10,
  },
  amount: {
    backgroundColor: colors.progressBack,
    paddingHorizontal: 25,
    paddingVertical: 12,
    marginRight: 10,
    borderRadius: 4,
  },
  amountText: {
    fontFamily: fonts.primary_demi_bold_font,
    color: colors.green,
    fontSize: 12,
  },
  amountWrap: {
    marginTop: 30,
  },
  margin_15: {marginTop: 15},
});
