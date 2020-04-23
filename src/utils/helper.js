import uuid from './uuid';
// eslint-disable-next-line import/prefer-default-export
export const formatCreateDeck = (title) => ({
  [title]: {
    title,
    questions: [],
    timestamp: new Date(Date.now()),
    id: uuid(),
    index: -1,
  },
});

export const convertTimeToDate = (timestamp) => {
  const a = new Date(timestamp);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const time = `${date} ${month} ${year}`;
  return time;
};

export const timeToString = (timestamp) => {
  const date = convertTimeToDate(timestamp);
  const today = convertTimeToDate(new Date(Date.now()));

  return date === today ? 'today' : date;
};
