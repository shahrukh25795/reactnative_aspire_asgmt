import React, {useEffect, useState} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import {colors} from '../../utils/colors';
import {globalStyles} from '../../utils/globalStyles';

interface BottomSheetProps {
  visible?: boolean;
  onClose?: Function;
  onRequestClose?: Function;
  modalStyle?: Object;
  modalContentStyle?: Object;
  duration?: number;
  delay?: number;
  initialTranslateY?: any;
  children: any;
  disableLayer?: boolean;
  onLayout?: (e: any) => void;
}

const BottomSheet = ({
  visible = true,
  onClose,
  onRequestClose,
  modalStyle,
  modalContentStyle,
  disableLayer = false,
  duration = 300,
  delay = 0,
  initialTranslateY = 300,
  ...props
}: BottomSheetProps) => {
  const [translateY] = useState(new Animated.Value(initialTranslateY));

  const smoothAnim = (start = true) => {
    return Animated.timing(translateY, {
      toValue: start ? 0 : initialTranslateY,
      duration: duration,
      delay: delay,
      useNativeDriver: true,
    });
  };

  const onModalClose = (cb?: Function) => {
    if (onClose) {
      smoothAnim(false).start(() => {
        onClose(cb);
      });
    } else if (onRequestClose) {
      smoothAnim(false).start(() => {
        onRequestClose(cb);
      });
    }
  };

  useEffect(() => {
    if (visible) {
      smoothAnim().start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return (
    <Modal
      animated
      animationType="fade"
      visible={visible}
      transparent
      onRequestClose={() => onModalClose()}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          if (disableLayer) {
            return;
          }
          onModalClose();
        }}
        style={globalStyles.flex1}>
        <View style={[styles.layer]}>
          <TouchableWithoutFeedback>
            <Animated.View
              style={[
                styles.modalBody,
                {transform: [{translateY: translateY}]},
                modalStyle,
              ]}>
              <View
                onLayout={props.onLayout}
                style={[styles.modalContent, modalContentStyle]}>
                {props.children({
                  onClose: (cb: any) => onModalClose(cb),
                })}
              </View>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  layer: {
    backgroundColor: colors.dark_green_rgba(0.6),
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalBody: {
    backgroundColor: colors.transparent,
    position: 'absolute',
    minHeight: 500,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 24,
  },
  modalContent: {
    backgroundColor: colors.white,
    alignSelf: 'center',
    borderRadius: 24,
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 12,
  },
});
