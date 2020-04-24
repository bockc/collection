import React, { useState } from 'react';
import {
  Alert,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RNFileSelector from 'react-native-file-selector';
import RNFS from 'react-native-fs';
import Liste from '../../Liste';
import SearchBar from '../SearchBar';
import ItemTeaser from '../ItemTeaser';
import images from '../../assets';

const List = () => {
  const [actionsheetVisible, setActionsheetVisible] = useState(false);
  // const [list, setList] = useState([]);

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

  const importCollection = () => {
    return null;
    RNFileSelector.Show({
      title: 'Choisis le fichier',
      onDone: (path) => {
        console.log(`file selected: ${path}`);
        RNFS.readFile(path, 'utf8')
          // .then((rawContent) => {
          //   console.log('RAWCONTENT', typeof rawContent, rawContent);
          //   return JSON.stringify(rawContent);
          // })
          .then((stringifiedContent) => {
            console.log('STRINGIFIEDCONTENT', typeof stringifiedContent, stringifiedContent);
            return JSON.parse(`${stringifiedContent}`);
          })
          .then((parsedContent) => {
            console.log('PARSEDCONTENT', parsedContent?.[0]);
            return parsedContent;
          })
          .catch((e) => {
            console.warn('Error', e);
          });
      },
      onCancel: () => {
        console.log('cancelled');
      },
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SearchBar onMenuOpen={(isOpen) => setActionsheetVisible(isOpen)} />
      <ScrollView style={{ flex: 1, padding: 4, backgroundColor: '#EEEEEE' }}>
        {renderList()}
      </ScrollView>
      {actionsheetVisible && (
        <TouchableOpacity
          activeOpacity={1}
          style={{
            width: '100%',
            height: Dimensions.get('window').height - 64, // navbar height. no style yet (releasing 1 week after Half-Life 3).
            backgroundColor: 'rgba(52, 52, 52, 0.8)',
            position: 'absolute',
            bottom: 0,
            left: 0,
          }}
        >
          <View
            style={{
              backgroundColor: 'rgba(132, 186, 201, 1)',
              flex: 1,
              width: 280,
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              style={{
                borderTopWidth: 1,
                borderTopColor: 'grey',
                width: '100%',
                height: 42,
                backgroundColor: 'white',
                justifyContent: 'center',
                flexDirection: 'row',
              }}
              onPress={() => {
                Alert.alert(
                  'ATTENTION!!!',
                  'Importer une collection remplacera celle actuellement présente. Le fichier doit se trouver dans le dossier Documents de ton téléphone.\nContinuer quand même ?',
                  [
                    { text: 'Non' },
                    {
                      text: 'Oui',
                      onPress: () => importCollection(),
                    },
                  ],
                  { cancelable: true }
                );
              }}
            >
              <Image
                source={images.icons.importFile}
                style={{ height: 40, width: 40, marginLeft: -10 }}
              />
              <Text style={{ alignSelf: 'center', fontSize: 16 }}>Importer une collection</Text>
            </TouchableOpacity>
            {/* <Text>😘</Text> */}
          </View>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default List;
