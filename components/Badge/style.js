const {StyleSheet} = require('react-native');
const {
  scaleFontSize,
  verticalScale,
  horizontalScale,
} = require('../../assets/styles/scaling');

const style = StyleSheet.create({
  badge: {
    backgroundColor: '#145855',
    height: verticalScale(22),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  title: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(10),
    fontWeight: '600',
    lineHeight: scaleFontSize(12),
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

module.exports = style;
