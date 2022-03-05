/* eslint-disable prettier/prettier */
import Cards from '../containers/cardManagement';
import Dummy from '../containers/Dummy';
import { images } from './assets';
import { navigationConstants } from './navigationConstants';
import { STRING_CONSTANTS } from './stringConstants';
import { TabBarMenuType } from './types';

export const tabBarMenu: Array<TabBarMenuType> = [
    { image: images.home_icon, label: STRING_CONSTANTS.homeText, component: Dummy, route: navigationConstants.home_screen },
    { image: images.card_icon, label: STRING_CONSTANTS.debitCardText, component: Cards, route: navigationConstants.cards_screen },
    { image: images.payments_icon, label: STRING_CONSTANTS.paymentText, component: Dummy, route: navigationConstants.payment_screen },
    { image: images.credit_icon, label: STRING_CONSTANTS.creditText, component: Dummy, route: navigationConstants.credit_screen },
    { image: images.account_icon, label: STRING_CONSTANTS.profileText, component: Dummy, route: navigationConstants.profile_screen },
];
