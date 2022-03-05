/* eslint-disable prettier/prettier */
import { ReactNode } from 'react';
import { ImageSourcePropType } from 'react-native';

export type TabBarMenuType = {
    image: ImageSourcePropType | any;
    label: string;
    component: ReactNode | any;
    route: string;
};
