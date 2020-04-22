// import 'react-native-get-random-values';
// import { nanoid } from 'nanoid';
import { uuid } from 'src/utils';

const Data = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
    ],
    id: uuid(),
    index: 1,
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
    id: uuid(),
    index: 0,
  },
  Vue: {
    title: 'Vue',
    questions: [
      {
        question: 'What is Vue?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in Vue?',
        answer: 'The componentDidMount lifecycle event',
      },
    ],
    id: uuid(),
    index: 2,
  },
  Expo: {
    title: 'Expo',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
    id: uuid(),
    index: 3,
  },
  AWS: {
    title: 'AWS',
    questions: [
      {
        question: 'What is AWS?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in AWS?',
        answer: 'The componentDidMount lifecycle event',
      },
    ],
    id: uuid(),
    index: 4,
  },
  Apollo: {
    title: 'Apollo',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
    id: uuid(),
    index: 5,
  },
  Jest: {
    title: 'Jest',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
    id: uuid(),
    index: 6,
  },
  'React Native': {
    title: 'React Native',
    questions: [
      {
        question: 'What is React Native?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in React Native?',
        answer: 'The componentDidMount lifecycle event',
      },
    ],
    id: uuid(),
    index: 7,
  },
  Python: {
    title: 'Python',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
    id: uuid(),
    index: 8,
  },
};

export default Data;
