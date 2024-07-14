import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  userContainer: { flexDirection: 'row' },
  userTextContainer: { justifyContent: 'center', marginLeft: horizontalScale(10) },
  user: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  username: { color: '#000', fontFamily: getFontFamily('Inter', '600'), fontSize: scaleFontSize(16) },
  location: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(12),
    marginTop: verticalScale(5),
  },
  postImage: { alignItems: 'center', marginTop: 20, marginVertical: verticalScale(20) },
  userPostContainer: {
    margin: verticalScale(35),
    paddingBottom: verticalScale(20),
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
  },
  actionContainer: { flexDirection: 'row' },
  actionRightContainer: { flexDirection: 'row', marginLeft: horizontalScale(27) },
  userActionContainer: { flexDirection: 'row', marginLeft: horizontalScale(10) },
  like: { marginLeft: horizontalScale(3), color: '#79869F' },
});

export default style;
