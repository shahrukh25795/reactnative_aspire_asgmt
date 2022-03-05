/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { fonts } from './fonts';

export const globalStyles = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    flexGrow: {
        flexGrow: 1,
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
    headerHeight: {
        height: 230,
    },
    RFC: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    REC: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    RCC: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    RSEC: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    RSC: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    //Header style
    headerText: {
        fontFamily: fonts.primary_bold_font,
        fontSize: 24,
        color: colors.white,
        marginTop: 15,
    },
    avlBalance: {
        fontFamily: fonts.primary_medium_font,
        color: colors.white,
        marginTop: 25,
        fontSize: 14,
    },
    amountWrap: {
        backgroundColor: colors.green,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 4,
    },
    amtSyb: {
        fontFamily: fonts.primary_bold_font,
        fontSize: 12,
        color: colors.white,
    },
    amt: {
        fontFamily: fonts.primary_bold_font,
        fontSize: 24,
        color: colors.white,
        marginLeft: 15,
    },
    amtContainer: {
        marginTop: 10,
    },


    //Cards
    cardContainer: {
        flex: 1,
        backgroundColor: colors.white,
        marginTop: 230,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 20,
        paddingBottom: 100,
    },
});
