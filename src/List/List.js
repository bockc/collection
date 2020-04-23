import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import ItemTeaser from '../ItemTeaser';

const List = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#EEEEEE', padding: 4 }}>
      <ItemTeaser
        data={{
          identification: 'Rusticana, ovale sur plat',
          stamp: 'de service vers 1900',
          value: '100€',
          itemID: '203',
        }}
      />
      <ItemTeaser />
      <ItemTeaser />
      <ItemTeaser />
      <ItemTeaser />
    </SafeAreaView>
  );
};

export default List;
