import { StyleSheet } from 'react-native';
import { getFontFamily } from '../fonts/helper';
import { horizontalScale, scaleFontSize, verticalScale } from './scaling';

const globalStyle = StyleSheet.create({
  header: {
    marginLeft: horizontalScale(27),
    marginRight: horizontalScale(17),
    marginTop: verticalScale(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  messageIcon: { padding: verticalScale(14), backgroundColor: '#F9FAFB', borderRadius: horizontalScale(100) },

  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: horizontalScale(10),
    height: horizontalScale(10),
    borderRadius: horizontalScale(10),
    position: 'absolute',
    right: horizontalScale(10),
    top: verticalScale(12),
  },

  messageNumber: {
    color: '#fff',
    fontSize: scaleFontSize(6),
    fontFamily: getFontFamily('Inter', '600'),
  },

  userStoryContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(28),
  },
});

export default globalStyle;
