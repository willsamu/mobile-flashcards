// eslint-disable-next-line import/prefer-default-export
export const formatCreateDeck = (title) => ({
  [title]: {
    title,
    questions: [],
  },
  timestamp: new Date(Date.now),
});
