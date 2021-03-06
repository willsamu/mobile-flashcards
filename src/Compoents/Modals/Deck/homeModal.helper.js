import {
  addDeck,
  toggleShowModalHome,
  deleteDeckFromData,
  updateDeck,
  cancelEditModalHome,
} from 'src/redux/actions';
import { Alert } from 'react-native';

const addNewDeck = (dispatch, items, setError, value, setInput, navigate) => {
  if (!value) {
    setError(`Please Enter a Name!`);
    return null;
  }
  if (items.includes(value)) {
    setError(`Deck ${value} exists already!`);
    return null;
  }
  setInput('');
  return addDeck(dispatch, value, navigate);
};

const handleUpdateDeck = (dispatch, oldTitle, newTitle, setInput, setError) => {
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

export const deleteDeck = (dispatch, editDeck, setError, setInput) => {
  Alert.alert(
    `Delete Deck ${editDeck} `,
    `Are you sure you want to delete ${editDeck}? You can't revert this action!`,
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'DELETE',
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
  dispatch(toggleShowModalHome(false));
};

export const handleMainButton = (
  editDeck,
  dispatch,
  items,
  setError,
  value,
  setInput,
  navigate,
) => {
  setError('');
  return editDeck
    ? handleUpdateDeck(dispatch, editDeck, value, setInput, setError)
    : addNewDeck(dispatch, items, setError, value, setInput, navigate);
};

export const handleCancelButton = (editDeck, dispatch, setError, setInput) => {
  return editDeck
    ? deleteDeck(dispatch, editDeck, setError, setInput)
    : handleCancel(dispatch, setError, setInput);
};

export const getTitle = (edit) => ({
  secondary: edit ? 'Delete' : 'Cancel',
  primary: edit ? 'Save' : 'Add',
});
