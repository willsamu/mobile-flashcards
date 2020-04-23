import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import { StyleSheet, Platform } from 'react-native';
import { useDispatch } from 'react-redux';

import { editDeck } from 'src/redux/actions';

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

const SettingsBtn = ({ title }) => {
  const dispatch = useDispatch();
  return (
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
      onPress={() => editDeck(dispatch, title)}
    />
  );
};

export default SettingsBtn;
