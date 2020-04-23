import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import Liste from '../../Liste';
import SearchBar from '../SearchBar';
import ItemTeaser from '../ItemTeaser';

const List = () => {
  const renderList = () =>
    Liste.map((item, index) => {
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
    <SafeAreaView style={{ flex: 1 }}>
      <SearchBar />
      <ScrollView style={{ flex: 1, padding: 4, backgroundColor: 'purple' }}>
        {renderList()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default List;
