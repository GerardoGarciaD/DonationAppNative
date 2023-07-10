const {StyleSheet} = require('react-native');
const {
  scaleFontSize,
  verticalScale,
  horizontalScale,
} = require('../../assets/styles/scaling');

const style = StyleSheet.create({
  button: {
    backgroundColor: '#2979F2',
    height: verticalScale(55),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  title: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    fontWeight: '600',
    lineHeight: scaleFontSize(19),
    color: '#FFFFFF',
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});

module.exports = style;
