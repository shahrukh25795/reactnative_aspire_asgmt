/* eslint-disable prettier/prettier */
import { ReactNode } from 'react';
import { ImageSourcePropType, ViewStyle } from 'react-native';

export type TabBarMenuType = {
    image: ImageSourcePropType | any;
    label: string;
    component: ReactNode | any;
    route: string;
};

export type CommonStyleProps = {
    style?: ViewStyle;
};

export type TouchableProps = CommonStyleProps & {
    onPress?: () => void;
    activeOpacity?: number;
};

export type CardContentType = {
    heading: string;
    description: string;
    image: ImageSourcePropType | any;
    isChecked: boolean;
    needCheckBox: boolean;
}

export enum ToggleState {
    STATE_ZERO = 0,
    STATE_14 = 14,
}
