/* eslint-disable no-bitwise */
/**
 * @author https://github.com/react-native-community/react-native-webview/issues/1312#issuecomment-613359818
 */
const uuid = () => {
  let d = new Date().getTime();

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);

    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
};

export default uuid;
