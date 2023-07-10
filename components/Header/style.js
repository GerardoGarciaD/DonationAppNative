const {StyleSheet} = require('react-native');
const {scaleFontSize} = require('../../assets/styles/scaling');

const style = StyleSheet.create({
  header1: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(24),
    lineHeight: scaleFontSize(29),
    fontWeight: '600',
  },
  header2: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(22),
    fontWeight: '600',
  },
  header3: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    fontWeight: '600',
  },
});

module.exports = style;
