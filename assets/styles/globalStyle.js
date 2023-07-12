import {verticalScale} from './scaling';

const {StyleSheet} = require('react-native');

const globalStyles = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: '#fff',
  },
  heighFull: {
    height: '100%',
  },
  flex: {
    flex: 1,
  },
  margingBottom: {
    marginBottom: verticalScale(24),
  },
});

export default globalStyles;
