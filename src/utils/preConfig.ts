/* eslint-disable prettier/prettier */
import Cards from '../containers/cardManagement';
import Dummy from '../containers/Dummy';
import { images } from './assets';
import { navigationConstants } from './navigationConstants';
import { STRING_CONSTANTS } from './stringConstants';
import { CardContentType, TabBarMenuType } from './types';

export const tabBarMenu: Array<TabBarMenuType> = [
    { image: images.home_icon, label: STRING_CONSTANTS.homeText, component: Dummy, route: navigationConstants.home_screen },
    { image: images.card_icon, label: STRING_CONSTANTS.debitCardText, component: Cards, route: navigationConstants.cards_screen },
    { image: images.payments_icon, label: STRING_CONSTANTS.paymentText, component: Dummy, route: navigationConstants.payment_screen },
    { image: images.credit_icon, label: STRING_CONSTANTS.creditText, component: Dummy, route: navigationConstants.credit_screen },
    { image: images.account_icon, label: STRING_CONSTANTS.profileText, component: Dummy, route: navigationConstants.profile_screen },
];

export const cardsOptions: Array<CardContentType> = [
    { heading: STRING_CONSTANTS.topUpAccountText, description: STRING_CONSTANTS.topUpAccountDescText, image: images.top_up, isChecked: false, needCheckBox: false },
    { heading: STRING_CONSTANTS.weeklySpendingLimitText, description: STRING_CONSTANTS.weeklySpendingLimitDescText, image: images.weekly, isChecked: false, needCheckBox: true },
    { heading: STRING_CONSTANTS.freezeCardText, description: STRING_CONSTANTS.freezeCardDescText, image: images.freeze, isChecked: false, needCheckBox: true },
    { heading: STRING_CONSTANTS.getANewCardText, description: STRING_CONSTANTS.getANewCardDescText, image: images.new_card, isChecked: false, needCheckBox: false },
    { heading: STRING_CONSTANTS.deactivatedCardsText, description: STRING_CONSTANTS.deactivatedCardsDescText, image: images.deactivated_card, isChecked: false, needCheckBox: false },
];

