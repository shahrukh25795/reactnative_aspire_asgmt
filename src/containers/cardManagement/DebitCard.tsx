import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../utils/colors';
import ShowHideChip from './ShowHideChip';
import {images} from '../../utils/assets';
import {fonts} from '../../utils/fonts';
import {globalStyles} from '../../utils/globalStyles';
import {STRING_CONSTANTS} from '../../utils/stringConstants';

const DebitCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cardNum = isOpen
    ? STRING_CONSTANTS.cardNumText
    : STRING_CONSTANTS.secretCardNumText;

  return (
    <View style={styles.container}>
      <ShowHideChip
        isOpen={isOpen}
        onPress={() => setIsOpen(prvState => !prvState)}
      />
      <View style={styles.main}>
        <Image style={styles.aspireLogo} source={images.aspirelogo} />
        <Text style={styles.cardHolderName}>
          {STRING_CONSTANTS.cardHolderNameText}
        </Text>
        <Text style={styles.cardNum}>{cardNum}</Text>
        <View style={[globalStyles.RFC, styles.expiryWrap]}>
          <Text style={[styles.cardNum, styles.expiry]}>
            {STRING_CONSTANTS.expiryText}
          </Text>
          <Text style={[styles.cardNum, styles.expiry, styles.cvv]}>
            {STRING_CONSTANTS.cvvText}
          </Text>
        </View>
        <Image style={styles.aspireLogo} source={images.visalogo} />
      </View>
    </View>
  );
};

export default DebitCard;

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.green,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  container: {
    marginTop: -50,
    width: '100%',
  },
  aspireLogo: {
    alignSelf: 'flex-end',
  },
  cardHolderName: {
    fontFamily: fonts.primary_bold_font,
    fontSize: 22,
    color: colors.white,
    marginBottom: 20,
  },
  cardNum: {
    fontFamily: fonts.primary_demi_bold_font,
    fontSize: 14,
    color: colors.white,
  },
  expiry: {
    fontSize: 12,
  },
  cvv: {
    marginLeft: 30,
  },
  expiryWrap: {
    marginTop: 15,
    marginBottom: 5,
  },
});
