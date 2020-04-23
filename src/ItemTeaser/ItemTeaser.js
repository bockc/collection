import React, { useState, useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import images from '../../assets';

const ItemTeaser = (props) => {
  const [identification, setIdentification] = useState(props.data?.identification); // identification (décor-forme)
  useEffect(() => setIdentification(props.data?.identification), [props.data?.identification]);

  const [stamp, setStamp] = useState(props.data?.stamp); // tampon cachet signature
  useEffect(() => setStamp(props.data?.stamp), [props.data?.stamp]);

  const [value, setValue] = useState(props?.data?.value); // valeur
  useEffect(() => setValue(props?.data?.value), [props?.data?.value]);

  const [itemID, setItemID] = useState(props?.data?.itemID); // ID
  useEffect(() => setItemID(props?.data?.itemID), [props?.data?.itemID]);

  const renderPicture = () => (
    <View
      style={{
        backgroundColor: '#CCCCCC',
        height: 100,
        width: 100,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      }}
    >
      {props?.data?.picture ? (
        <Text style={{ fontSize: 12 }}>PICTURE</Text>
      ) : (
        <Image
          style={{
            height: 54,
            width: 54,
            marginBottom: 16, // I'm ashamed of doing this, but the icon is just very bad.
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
          }}
          alignSelf="center"
          source={images.placeholders.moutardier}
        />
      )}
    </View>
  );

  const renderDetails = () => (
    <View style={{ flex: 1, marginLeft: 8, marginTop: 2, marginRight: 2 }}>
      <Text numberOfLines={2} style={{ fontSize: 20 }}>
        {identification}
      </Text>
      <Text multiline={false} numberOfLines={1} style={{ fontSize: 18 }}>
        {stamp}
      </Text>
      <Text multiline={false} numberOfLines={1} style={{ fontSize: 16 }}>
        {value}
      </Text>
    </View>
  );

  const renderID = () => (
    <Text
      style={{
        alignSelf: 'center',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#333333',
        borderRadius: 4,
        padding: 2,
        maxWidth: 38,
        marginRight: 4,
      }}
    >
      {itemID}
    </Text>
  );

  return (
    <TouchableOpacity
      style={{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 4,
        padding: 4,
      }}
    >
      {renderPicture()}
      {renderDetails()}
      {renderID()}
    </TouchableOpacity>
  );
};

ItemTeaser.propTypes = {
  data: PropTypes.shape({
    identification: PropTypes.string,
    stamp: PropTypes.string,
    value: PropTypes.string,
    itemID: PropTypes.number,
  }),
};

ItemTeaser.defaultProps = {
  data: {
    identification: null,
    stamp: null,
    value: null,
    ID: null,
  },
};

export default ItemTeaser;
