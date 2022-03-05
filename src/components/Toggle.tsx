import React, {useState, useEffect} from 'react';
import {StyleSheet, TouchableOpacity, Animated} from 'react-native';
import {colors} from '../utils/colors';
import {ToggleState} from '../utils/types';

interface ToggleProps {
  onChange: any;
  isToggleOn: boolean;
  disabled?: boolean;
}

const Toggle = ({onChange, isToggleOn, disabled}: ToggleProps) => {
  const [translateX]: any[] = useState(
    new Animated.Value(ToggleState.STATE_ZERO),
  );
  const [animation] = useState(new Animated.Value(ToggleState.STATE_ZERO));
  const [isMount, setIsMount] = useState(false);

  const onToggleToggle = (value: any) => {
    Animated.timing(animation, {
      toValue: value === ToggleState.STATE_ZERO ? 0 : 1,
      duration: isMount ? 100 : 0,
      useNativeDriver: false,
    }).start();

    Animated.timing(translateX, {
      toValue: value,
      duration: isMount ? 300 : 0,
      useNativeDriver: false,
    }).start();
  };

  const backColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.grey, colors.green],
  });

  useEffect(() => {
    const value = isToggleOn ? ToggleState.STATE_14 : ToggleState.STATE_ZERO;
    onToggleToggle(value);
    setIsMount(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isToggleOn) {
      onToggleToggle(ToggleState.STATE_14);
    } else {
      onToggleToggle(ToggleState.STATE_ZERO);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isToggleOn]);

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={1}
      onPress={() => {
        const value = isToggleOn
          ? ToggleState.STATE_ZERO
          : ToggleState.STATE_14;
        onToggleToggle(value);
        onChange();
      }}>
      <Animated.View
        style={[styles.ToggleContainer, {backgroundColor: backColor}]}>
        <Animated.View style={[styles.Toggle, {transform: [{translateX}]}]} />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ToggleContainer: {
    width: 35,
    height: 20,
    backgroundColor: colors.checkBoxBack,
    justifyContent: 'center',
    borderRadius: 50,
    padding: 2,
  },
  Toggle: {
    width: 18,
    height: 18,
    backgroundColor: colors.white,
    borderRadius: 50,
  },
});
export default Toggle;
