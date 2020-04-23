import uuid from './uuid';

export const formatCreateDeck = (title) => ({
  [title]: {
    title,
    questions: [],
    id: uuid(),
    timestamp: -1,
    index: -1,
  },
});

const convertTimeToDate = (timestamp) => {
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
  if (timestamp === -1) return 'never';
  const date = convertTimeToDate(timestamp);
  const today = convertTimeToDate(new Date(Date.now()));

  return date === today ? 'today' : date;
};
