import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  btnConainer: {
    position: 'absolute',
    top: 0,
    right: 30,
    zIndex: 200,
    elevation: 50,
  },
  btnStyle: {
    backgroundColor: 'transparent',
  },
});

const SettingsBtn = ({ name }) => (
  <Button
    buttonStyle={styles.btnStyle}
    containerStyle={styles.btnConainer}
    icon={
      <Ionicons
        name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
        size={25}
        color="#001427"
      />
    }
  />
);

export default SettingsBtn;
