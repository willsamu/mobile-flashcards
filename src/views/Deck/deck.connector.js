import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute, useNavigation } from '@react-navigation/native';
import { setQuestionOrder, toggleShowModalQuestion } from 'src/redux/actions';
import Toast from 'react-native-simple-toast';
import Deck from './Deck.react';

const ConnectedDeck = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const { title } = route.params;

  const navigation = useNavigation();
  const items = useSelector((state) => state.data[title].questions);

  const navigate = () =>
    items && items.length > 0
      ? navigation.navigate('Quiz', { title })
      : Toast.showWithGravity('Please add at least one Card!', Toast.SHORT, Toast.CENTER);

  const setOrder = ({ data }) => dispatch(setQuestionOrder(data, title));
  const showModal = () => dispatch(toggleShowModalQuestion(true));
  return (
    <Deck
      showModal={showModal}
      setOrder={setOrder}
      navigate={navigate}
      items={items}
      title={title}
    />
  );
};

export default ConnectedDeck;
