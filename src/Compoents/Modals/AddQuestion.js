import React from 'react';

import Modal from 'react-native-modal';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Input, Button } from 'react-native-elements';

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
    borderColor: '#001427',
    borderWidth: 2,
  },
  closeBtnTitle: {
    color: '#001427',
  },
  addBtn: {
    backgroundColor: '#001427',
    borderColor: '#001427',
    borderWidth: 2,
  },
});

const AddQuestion = ({ show, setShow }) => {
  return (
    <Modal isVisible={show} onBackdropPress={() => setShow(false)}>
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={styles.content}>
            <Input multiline inputStyle={styles.inputStyle} label="Question" />
            <Input multiline inputStyle={styles.inputStyle} label="Answer" />
            <View style={styles.btnContainer}>
              <Button
                buttonStyle={styles.closeBtn}
                containerStyle={{ flex: 1, marginHorizontal: 5 }}
                titleStyle={styles.closeBtnTitle}
                title="Cancel"
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

export default AddQuestion;
