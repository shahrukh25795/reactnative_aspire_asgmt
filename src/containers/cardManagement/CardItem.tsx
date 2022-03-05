import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CommonStyleProps, CardContentType} from '../../utils/types';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils/colors';
import Toggle from '../../components/Toggle';

type CardItemProps = CommonStyleProps & {
  item: CardContentType;
  onToggle?: () => void;
};

const CardItem = (props: CardItemProps) => {
  const {item} = props;
  return (
    <View style={[styles.main, props?.style]}>
      <Image source={item.image} />
      <View style={styles.textWrp}>
        <Text style={styles.heading}>{item?.heading}</Text>
        <Text style={styles.desc}>{item?.description}</Text>
      </View>
      {item.needCheckBox && (
        <View style={styles.checkBox}>
          <Toggle isToggleOn={item?.isChecked} onChange={props?.onToggle} />
        </View>
      )}
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    marginTop: 25,
  },
  textWrp: {
    marginLeft: 15,
    maxWidth: '75%',
  },
  heading: {
    fontFamily: fonts.primary_medium_font,
    color: colors.card_heading,
    fontSize: 14,
  },
  desc: {
    fontFamily: fonts.primary_regular_font,
    color: colors.card_desc,
    fontSize: 13,
    marginTop: 2,
  },
  checkBox: {
    position: 'absolute',
    right: 0,
    top: 8,
  },
});
