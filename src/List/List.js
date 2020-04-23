import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Liste from '../../Liste';
import ItemTeaser from '../ItemTeaser';

const List = () => {
  const renderList = () =>
    Liste.map((item, index) => {
      if (index > 20) return null;
      return (
        <ItemTeaser
          key={index}
          data={{
            identification: item['identification (décor - forme)'],
            stamp: item['tampon cachet signature'],
            value: item.Valeur,
            itemID: index,
          }}
        />
      );
    });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#EEEEEE', padding: 4 }}>
      <ScrollView>{renderList()}</ScrollView>
    </SafeAreaView>
  );
};

export default List;
