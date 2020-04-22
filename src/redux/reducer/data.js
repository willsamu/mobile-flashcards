import Data from 'src/utils/Data';

const data = (state = { ...Data }, action) => {
  switch (action.type) {
    case '': {
      return state;
    }
    default:
      return state;
  }
};

const dataOrder = (state = Object.values(Data), action) => {
  switch (action.type) {
    case '': {
      return state;
    }
    default:
      return state;
  }
};

export { data, dataOrder };
