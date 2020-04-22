// import 'react-native-get-random-values';
// import { nanoid } from 'nanoid';
import { uuid } from 'src/utils';

const Data = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'Question One is actually a super long weird ass string',
        answer: true,
      },
      {
        question: 'Question Two',
        answer: false,
      },
    ],
    id: uuid(),
    index: 1,
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'Question One',
        answer: false,
      },
    ],
    id: uuid(),
    index: 0,
  },
  Vue: {
    title: 'Vue',
    questions: [
      {
        question: 'Question One',
        answer: false,
      },
      {
        question: 'Question Two',
        answer: false,
      },
    ],
    id: uuid(),
    index: 2,
  },
  Expo: {
    title: 'Expo',
    questions: [
      {
        question: 'Question One',
        answer: false,
      },
      {
        question: 'Question Two',
        answer: false,
      },
      {
        question: 'Question Three',
        answer: true,
      },
    ],
    id: uuid(),
    index: 3,
  },
  AWS: {
    title: 'AWS',
    questions: [
      {
        question: 'Question One',
        answer: true,
      },
      {
        question: 'Question Two',
        answer: true,
      },
    ],
    id: uuid(),
    index: 4,
  },
  Apollo: {
    title: 'Apollo',
    questions: [
      {
        question: 'Question One',
        answer: true,
      },
    ],
    id: uuid(),
    index: 5,
  },
  Jest: {
    title: 'Jest',
    questions: [
      {
        question: 'Question One',
        answer: true,
      },
      {
        question: 'Question Two',
        answer: true,
      },
      {
        question: 'Question Three',
        answer: true,
      },
    ],
    id: uuid(),
    index: 6,
  },
  'React Native': {
    title: 'React Native',
    questions: [
      {
        question: 'Question One',
        answer: true,
      },
      {
        question: 'Question Two',
        answer: true,
      },
    ],
    id: uuid(),
    index: 7,
  },
  Python: {
    title: 'Python',
    questions: [
      {
        question: 'Question One',
        answer: true,
      },
    ],
    id: uuid(),
    index: 8,
  },
};

export default Data;
