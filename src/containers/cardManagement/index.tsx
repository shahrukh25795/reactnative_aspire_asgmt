import {View, ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Theme from '../../components/Theme';
import Header from '../../components/Header';
import {globalStyles} from '../../utils/globalStyles';
import DebitCard from './DebitCard';
import {cardsOptions} from '../../utils/preConfig';
import CardItem from './CardItem';
import LimitProgress from './LimitProgress';

const Cards = () => {
  const [cardsData, setCardsData] = useState([...cardsOptions]);

  const onToggle = (value: boolean, index: number) => {
    const allData = [...cardsData];
    allData[index].isChecked = value;
    setCardsData(allData);
  };
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
            <LimitProgress />
            {cardsData.map((item, index) => (
              <CardItem
                onToggle={() => onToggle(!item?.isChecked, index)}
                key={index}
                item={item}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </Theme>
  );
};

export default Cards;
