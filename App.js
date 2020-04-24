/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { PermissionsAndroid } from 'react-native';

import EntryPoint from './src';

/* <StatusBar barStyle="dark-content" /> */

PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);

const App: () => React$Node = () => <EntryPoint />;

export default App;
