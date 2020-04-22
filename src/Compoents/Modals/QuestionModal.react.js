import React from 'react';

import Modal from 'react-native-modal';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Input, Button, Divider } from 'react-native-elements';

import { darkBlue } from 'src/utils';

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

const AddQuestion = ({
  show,
  hideModal,
  handleMainButton,
  answerInput,
  setAnswerInput,
  answerError,
  questionInput,
  setQuestionInput,
  questionError,
}) => {
  return (
    <Modal isVisible={show} onBackdropPress={() => hideModal()}>
      <KeyboardAvoidingView>
        <ScrollView keyboardShouldPersistTaps="always">
          <View style={styles.content}>
            <Input
              defaultValue={questionInput}
              onChangeText={(input) => setQuestionInput(input.trim())}
              multiline
              inputStyle={styles.inputStyle}
              label="Question"
              errorMessage={questionError}
            />
            <Divider style={{ height: 10 }} />
            <Input
              defaultValue={answerInput}
              onChangeText={(input) => setAnswerInput(input.trim())}
              multiline
              inputStyle={styles.inputStyle}
              label="Explanation"
              errorMessage={answerError}
            />
            <Divider style={{ height: 10 }} />

            <View style={styles.btnContainer}>
              <Button
                buttonStyle={styles.closeBtn}
                containerStyle={{ flex: 1, marginHorizontal: 5 }}
                titleStyle={styles.closeBtnTitle}
                title="Cancel"
                onPress={() => hideModal()}
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
