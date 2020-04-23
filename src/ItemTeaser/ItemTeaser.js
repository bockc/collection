import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

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
        backgroundColor: 'cyan',
        height: 50,
        width: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignSelf: 'center',
        marginLeft: 4,
      }}
    >
      <Text style={{ fontSize: 12 }}>PICTURE</Text>
    </View>
  );

  const renderDetails = () => (
    <View style={{ flex: 1, marginLeft: 4, marginTop: 2 }}>
      <Text multiline={false} numberOfLines={1}>
        {identification}
      </Text>
      <Text multiline={false} numberOfLines={1}>
        {stamp}
      </Text>
      <Text multiline={false} numberOfLines={1}>
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
        maxWidth: 32,
        marginRight: 4,
      }}
    >
      {itemID}
    </Text>
  );

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        maxHeight: 64,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 4,
      }}
    >
      {renderPicture()}
      {renderDetails()}
      {renderID()}
    </View>
  );
};

ItemTeaser.propTypes = {
  data: PropTypes.shape({
    identification: PropTypes.string,
    stamp: PropTypes.string,
    value: PropTypes.string,
    itemID: PropTypes.string,
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
