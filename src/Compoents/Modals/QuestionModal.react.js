import React, { useState } from 'react';

import Modal from 'react-native-modal';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView, Text } from 'react-native';
import { Input, Button, ButtonGroup, Divider } from 'react-native-elements';

import { darkBlue } from 'src/utils';
import { cancelEditModalDeck } from 'src/redux/actions';

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
  selectedBtn: {
    backgroundColor: '#182C3D',
    borderColor: '#182C3D',
    borderWidth: 2,
  },
  selectedBtnText: {
    color: '#fff',
  },
  textAnswer: {
    color: '#86939e',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

const AddQuestion = ({ show, dispatch, backDropPress, handleMainButton }) => {
  const [index, setIndex] = useState(0);
  const buttons = ['True', 'False'];
  return (
    <Modal isVisible={show} onBackdropPress={() => backDropPress()}>
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={styles.content}>
            <Input multiline inputStyle={styles.inputStyle} label="Question" />
            <Divider style={{ height: 10 }} />
            <Input multiline inputStyle={styles.inputStyle} label="Explanation" />
            <Divider style={{ height: 10 }} />
            <Text style={styles.textAnswer}>Answer</Text>
            <ButtonGroup
              onPress={setIndex}
              selectedIndex={index}
              buttons={buttons}
              containerStyle={{ height: 30 }}
              containerBorderRadius={100}
              selectedButtonStyle={styles.selectedBtn}
              selectedTextStyle={styles.selectedBtnText}
              textStyle={{ color: '#000' }}
            />

            <View style={styles.btnContainer}>
              <Button
                buttonStyle={styles.closeBtn}
                containerStyle={{ flex: 1, marginHorizontal: 5 }}
                titleStyle={styles.closeBtnTitle}
                title="Cancel"
                onPress={() => cancelEditModalDeck(dispatch)}
              />
              <Button
                buttonStyle={styles.addBtn}
                containerStyle={{ flex: 2, marginHorizontal: 5 }}
                title="Add"
                onPress={() => handleMainButton()}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default AddQuestion;
