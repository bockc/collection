import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SearchBar = (props) => {
  const renderClearTextButton = () => (
    <TouchableOpacity style={{ height: 56, backgroundColor: 'white', justifyContent: 'center' }}>
      <Text style={{ fontSize: 18, marginRight: 4 }}>X</Text>
    </TouchableOpacity>
  );

  const renderSearchIcon = () => (
    <View
      style={{
        backgroundColor: 'white',
        flex: 0,
        height: 56,
        paddingLeft: 4,
        justifyContent: 'center',
      }}
    >
      <Image source={{ uri: 'search_icon' }} style={{ height: 24, width: 24 }} tintColor="black" />
    </View>
  );

  return (
    <View
      style={{
        flex: 0,
        flexDirection: 'row',
        height: 64,
        paddingHorizontal: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
      }}
    >
      {renderSearchIcon()}
      <TextInput
        style={{ flex: 1, height: 56, backgroundColor: 'white' }}
        // inlineImageLeft="search_icon"
        placeholder="Rechercher"
      />
      {renderClearTextButton()}
    </View>
  );
};

export default SearchBar;