import {Text, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../utils/globalStyles';
import {STRING_CONSTANTS} from '../utils/stringConstants';
import {CommonStyleProps} from '../utils/types';

interface AmountProps extends CommonStyleProps {
  amount: string;
  color?: string;
}

const Amount = (props: AmountProps) => {
  return (
    <View style={[globalStyles.RFC, globalStyles.amtContainer, props?.style]}>
      <View style={globalStyles.amountWrap}>
        <Text style={globalStyles.amtSyb}>{STRING_CONSTANTS.symbRsText}</Text>
      </View>
      <Text style={[globalStyles.amt, {color: props.color}]}>
        {props?.amount || STRING_CONSTANTS.amountText}
      </Text>
    </View>
  );
};

export default Amount;
