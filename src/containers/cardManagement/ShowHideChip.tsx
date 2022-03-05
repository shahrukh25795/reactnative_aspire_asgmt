import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {TouchableProps} from '../../utils/types';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils/colors';
import {images} from '../../utils/assets';
import {STRING_CONSTANTS} from '../../utils/stringConstants';

type ShowHideChipType = TouchableProps & {
  isOpen: boolean;
};

const ShowHideChip = (props: ShowHideChipType) => {
  const title = props?.isOpen
    ? STRING_CONSTANTS.hideCardNumberText
    : STRING_CONSTANTS.showCardNumberText;
  return (
    <TouchableOpacity
      activeOpacity={props?.activeOpacity || 0.7}
      onPress={props?.onPress}
      style={[styles.cardShowHide, props?.style]}>
      <Image source={props?.isOpen ? images.open_eye : images.close_eye} />
      <Text style={styles.showHideText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ShowHideChip;

const styles = StyleSheet.create({
  cardShowHide: {
    alignSelf: 'flex-end',
    backgroundColor: colors.white,
    height: 50,
    borderRadius: 6,
    paddingHorizontal: 15,
    position: 'absolute',
    top: -30,
    flexDirection: 'row',
    paddingTop: 8,
  },
  showHideText: {
    fontFamily: fonts.primary_bold_font,
    color: colors.green,
    fontSize: 12,
    marginLeft: 5,
  },
});
