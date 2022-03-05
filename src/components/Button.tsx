import React, {ReactNode} from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';
import {TouchableProps} from '../utils/types';

type ButtonProp = TouchableProps & {
  children?: ReactNode;
  label: string;
  buttonStyle?: ViewStyle;
};

const Button: React.FC<ButtonProp> = ({
  children,
  label,
  buttonStyle,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{...styles.commonStyle, ...buttonStyle}}
      activeOpacity={0.7}
      {...props}>
      {label ? <Text style={styles.buttonText}>{label}</Text> : children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontFamily: fonts.primary_demi_bold_font,
    fontSize: 14,
    color: colors.white,
    textTransform: 'capitalize',
  },
  commonStyle: {
    minHeight: 55,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: colors.green,
  },
});

export default Button;
