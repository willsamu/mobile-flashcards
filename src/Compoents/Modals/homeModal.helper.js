import { addDeck, toggleShowModalHome } from 'src/redux/actions';

export const addNewDeck = (dispatch, items, setError, value) => {
  if (items.includes(value)) {
    setError(`Deck ${value} exists already!`);
    return null;
  }
  if (!value) {
    setError(`Please Enter a Name!`);
    return null;
  }
  return addDeck(dispatch, value);
};

export const handleMainButton = (editDeck, dispatch, items, setError, value, setInput) => {
  setError('');
  setInput('');
  return editDeck
    ? console.log('GOTTA IMPLEMENT UPDATE TO @DeckModal.react.js')
    : addNewDeck(dispatch, items, setError, value);
};

export const handleCancelButton = (editDeck, dispatch, setError) => {
  setError('');
  return editDeck
    ? console.log('GOTTA ADD DELETE FUNC @DeckModal.react.js')
    : dispatch(toggleShowModalHome(false));
};

export const getTitle = (edit) => ({
  secondary: edit ? 'Delete' : 'Cancel',
  primary: edit ? 'Save' : 'Add',
});
