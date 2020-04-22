import uuid from './uuid';
// eslint-disable-next-line import/prefer-default-export
export const formatCreateDeck = (title) => ({
  [title]: {
    title,
    questions: [],
    timestamp: new Date(Date.now),
    id: uuid(),
    index: -1,
  },
});
