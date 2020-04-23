/* eslint-disable react/jsx-curly-newline */
import React from 'react';

import NativeModal from 'react-native-modal';
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

const Modal = ({
  input,
  setInput,
  show,
  error,
  handleButton,
  handleSecondaryButton,
  backDropPress,
  title,
}) => {
  return (
    <NativeModal isVisible={show} onBackdropPress={() => backDropPress()}>
      <KeyboardAvoidingView>
        <ScrollView keyboardShouldPersistTaps="always">
          <View style={styles.content}>
            <Input
              multiline
              inputStyle={styles.inputStyle}
              defaultValue={input}
              label="Deck Name"
              maxLength={20}
              errorMessage={error}
              onChangeText={(textInput) => setInput(textInput.trim())}
            />
            <View style={styles.btnContainer}>
              <Button
                buttonStyle={[
                  styles.closeBtn,
                  { borderColor: title.secondary === 'Delete' ? red : darkBlue },
                ]}
                containerStyle={{ flex: 1, marginHorizontal: 5 }}
                titleStyle={{ color: title.secondary === 'Delete' ? red : darkBlue }}
                title={title.secondary}
                onPress={() => handleSecondaryButton()}
              />
              <Button
                buttonStyle={styles.addBtn}
                containerStyle={{ flex: 2, marginHorizontal: 5 }}
                title={title.primary}
                onPress={() => handleButton()}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </NativeModal>
  );
};

export default Modal;
