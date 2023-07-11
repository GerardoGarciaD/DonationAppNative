import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  header: {
    marginTop: verticalScale(20),
    marginHorizontal: verticalScale(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerIntroText: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    fontWeight: '400',
    color: '#636776',
  },
  userName: {
    marginTop: verticalScale(5),
  },
  profileImage: {
    width: horizontalScale(50),
    height: verticalScale(50),
  },
  searchBox: {
    marginTop: verticalScale(20),
    marginHorizontal: verticalScale(24),
  },
  highlightedImageContainer: {
    marginHorizontal: horizontalScale(24),
  },
  highlightedImage: {
    width: '100%',
    height: verticalScale(160),
  },

  categoryHeader: {
    marginHorizontal: horizontalScale(24),
    marginVertical: verticalScale(10),
  },

  categories: {
    marginHorizontal: horizontalScale(24),
  },
  categoryItem: {
    marginRight: horizontalScale(8),
  },
  donationItemsContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
  },
});

export default styles;
