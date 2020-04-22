import {
  addDeck,
  toggleShowModalHome,
  deleteDeckFromData,
  updateDeck,
  cancelEditModalHome,
  toggleShowModalQuestion,
} from 'src/redux/actions';
import { Alert } from 'react-native';

const addNewQuestion = (dispatch, items, setError, value, setInput) => {
  if (!value) {
    setError(`Please Enter a Name!`);
    return null;
  }
  if (items.includes(value)) {
    setError(`Deck ${value} exists already!`);
    return null;
  }
  setInput('');

  return addDeck(dispatch, value);
};

const handleUpdateQuestion = (dispatch, oldTitle, newTitle, setInput, setError) => {
  if (!newTitle) {
    setError(`New Name can't be Empty!`);
    return null;
  }
  if (oldTitle === newTitle) {
    setError('');
    setInput('');
    cancelEditModalHome(dispatch);
    return null;
  }
  setInput('');
  return updateDeck(dispatch, oldTitle, newTitle);
};

export const handleMainButton = (editDeck, dispatch, items, setError, value, setInput) => {
  setError('');
  return editDeck
    ? handleUpdateQuestion(dispatch, editDeck, value, setInput, setError)
    : addNewQuestion(dispatch, items, setError, value, setInput);
};

export const deleteQuestion = (dispatch, editDeck, setError, setInput) => {
  Alert.alert(
    `Delete Deck ${editDeck} `,
    `Are you sure you want to delete ${editDeck}? You can't revert this action!`,
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          setError('');
          setInput('');
          dispatch(deleteDeckFromData(editDeck));
          dispatch(toggleShowModalHome(false));
        },
      },
    ],
    { cancelable: false },
  );
};

const handleCancel = (dispatch, setError, setInput) => {
  setError('');
  setInput('');
  dispatch(toggleShowModalQuestion(false));
};

export const handleCancelButton = (editDeck, dispatch, setError, setInput) => {
  return editDeck
    ? deleteQuestion(dispatch, editDeck, setError, setInput)
    : handleCancel(dispatch, setError, setInput);
};

export const getTitle = (edit) => ({
  secondary: edit ? 'Delete' : 'Cancel',
  primary: edit ? 'Save' : 'Add',
});
