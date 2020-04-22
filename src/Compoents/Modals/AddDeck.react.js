import React from 'react';

import Modal from 'react-native-modal';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Input, Button } from 'react-native-elements';

import { darkBlue, red } from 'src/utils/';

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputStyle: {
    fontSize: 15,
  },
  btnContainer: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  closeBtn: {
    backgroundColor: 'white',
    borderColor: darkBlue,
    borderWidth: 2,
  },
  closeBtnTitle: {
    color: darkBlue,
  },
  addBtn: {
    backgroundColor: darkBlue,
    borderColor: darkBlue,
    borderWidth: 2,
  },
});

const Deck = ({ show, setShow, edit = true }) => {
  return (
    <Modal isVisible={show} onBackdropPress={() => setShow(false)}>
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={styles.content}>
            <Input multiline inputStyle={styles.inputStyle} label="Deck Name" />
            <View style={styles.btnContainer}>
              <Button
                buttonStyle={[styles.closeBtn, { borderColor: edit ? red : darkBlue }]}
                containerStyle={{ flex: 1, marginHorizontal: 5 }}
                titleStyle={{ color: edit ? red : darkBlue }}
                title={edit ? 'Delete' : 'Cancel'}
                onPress={() => setShow(false)}
              />
              <Button
                buttonStyle={styles.addBtn}
                containerStyle={{ flex: 2, marginHorizontal: 5 }}
                title="Add"
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default Deck;
