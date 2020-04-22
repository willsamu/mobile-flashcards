/* eslint-disable react/jsx-curly-newline */
import React, { useState } from 'react';

import Modal from 'react-native-modal';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Input, Button } from 'react-native-elements';

import { darkBlue, red } from 'src/utils/';
import { useSelector, useDispatch } from 'react-redux';

import { toggleShowModalHome, cancelEditModal, addDeck } from 'src/redux/actions';

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

// const handleMainButton = (editDeck, dispatch, items, setError, value) => {
//   if (!editDeck && items.includes(value)) {
//     setError(`Deck ${value} exists already!`);
//     return null;
//   }
//   return editDeck
//     ? console.log('GOTTA IMPLEMENT UPDATE TO @DeckModal.react.js')
//     : addDeck(dispatch, value);
// };

const DeckModal = ({
  input,
  setInput,
  show,
  editDeck,
  items,
  dispatch,
  handleMainButton,
  error,
  setError,
  handleButton,
}) => {
  // const dispatch = useDispatch();
  // const show = useSelector((state) => state.ui.showModalHome);
  // const editDeck = useSelector((state) => state.ui.editModalHome);
  // const items = useSelector((state) => state.data.order);
  return (
    <Modal
      isVisible={show}
      onBackdropPress={() => {
        cancelEditModal(dispatch);
        setError('');
      }}
    >
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={styles.content}>
            <Input
              multiline
              inputStyle={styles.inputStyle}
              defaultValue={input}
              label="Deck Name"
              maxLength={20}
              errorMessage={error}
              onChangeText={(textInput) => setInput(textInput)}
            />
            <View style={styles.btnContainer}>
              <Button
                buttonStyle={[styles.closeBtn, { borderColor: editDeck ? red : darkBlue }]}
                containerStyle={{ flex: 1, marginHorizontal: 5 }}
                titleStyle={{ color: editDeck ? red : darkBlue }}
                title={editDeck ? 'Delete' : 'Cancel'}
                onPress={() =>
                  editDeck
                    ? console.log('GOTTA ADD DELETE FUNC @DeckModal.react.js')
                    : dispatch(toggleShowModalHome(false))
                }
              />
              <Button
                buttonStyle={styles.addBtn}
                containerStyle={{ flex: 2, marginHorizontal: 5 }}
                title={editDeck ? 'Save' : 'Add'}
                onPress={() =>
                  // handleMainButton(editDeck, dispatch, items, setError, 'AYAYAYAY DECK')
                  handleButton()
                }
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default DeckModal;
