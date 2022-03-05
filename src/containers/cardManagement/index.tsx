import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Theme from '../../components/Theme';
import Header from '../../components/Header';
import {globalStyles} from '../../utils/globalStyles';
import DebitCard from './DebitCard';

const Cards = () => {
  return (
    <Theme>
      <View style={globalStyles.flex1}>
        <Header />
        <ScrollView
          style={globalStyles.flex1}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={globalStyles.flexGrow}
          bounces={false}>
          <View style={[globalStyles.headerHeight, StyleSheet.absoluteFill]} />
          <View style={globalStyles.cardContainer}>
            <DebitCard />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Delectus, quis id quasi reiciendis eius rerum consequuntur alias
              exercitationem ipsa sequi aliquam corporis minima, ipsam
              voluptatibus harum in similique, cum quod.
            </Text>
          </View>
        </ScrollView>
      </View>
    </Theme>
  );
};

export default Cards;
