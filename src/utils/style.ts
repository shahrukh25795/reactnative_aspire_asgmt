/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { fonts } from './fonts';

export const styles = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    themeBackground: {
        backgroundColor: colors.theme_background,
    },
    tabLabelStyle: {
        color: colors.grey,
        fontSize: 10,
        fontFamily: fonts.primary_medium_font,
    },
    tabIconStyle: {
        tintColor: colors.grey,
    },
    activeLabelColor: {
        color: colors.green,
        fontFamily: fonts.primary_demi_bold_font,
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
        fontFamily: fonts.primary_bold_font,
        color: colors.white,
        fontSize: 15,
    },
    add_standard_horizontal_padding: {
        paddingHorizontal: 20,
    },
});
