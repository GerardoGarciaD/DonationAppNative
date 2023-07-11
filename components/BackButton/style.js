import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    width: horizontalScale(44),
    height: horizontalScale(44),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: horizontalScale(26),
  },
});

export default style;
