import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SearchBar = () => {
  const [input, setInput] = useState('');

  const renderClearTextButton = () => (
    <TouchableOpacity
      style={{
        height: 50,
        paddingLeft: 8,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: 'white',
        justifyContent: 'center',
      }}
      onPress={() => {
        if (input !== '') {
          setInput('');
        }
      }}
    >
      <Text style={{ fontSize: 18, marginRight: 4 }}>X</Text>
    </TouchableOpacity>
  );

  const renderSearchIcon = () => (
    <View
      style={{
        backgroundColor: 'white',
        flex: 0,
        height: 50,
        paddingLeft: 4,
        justifyContent: 'center',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
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
        style={{ flex: 1, height: 50, backgroundColor: 'white' }}
        value={input}
        onChangeText={(newInput) => setInput(newInput)}
        placeholder="Rechercher"
      />
      {renderClearTextButton()}
    </View>
  );
};

export default SearchBar;
