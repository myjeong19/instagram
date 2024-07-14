import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  storyContainer: {
    marginRight: horizontalScale(20),
  },

  firstName: {
    marginTop: verticalScale(8),
    textAlign: 'center',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(14),
    color: '#022150',
  },
});

export default style;
