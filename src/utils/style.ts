/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const styles = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    themeBackground: {
        backgroundColor: colors.theme_background,
    },
    tabLabelStyle: {
        color: colors.grey,
        fontSize: 9,
    },
    tabIconStyle: {
        tintColor: colors.grey,
    },
    activeLabelColor: {
        color: colors.green,
    },
    activeIconStyle: {
        tintColor: colors.green,
    },
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    testingTextStyle: {
        textAlign: 'center',
        // fontFamily: fonts.primary_bold_font,
        color: colors.white,
        fontSize: 20,
    },
});
