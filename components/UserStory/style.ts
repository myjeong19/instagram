import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  storyContainer: {
    marginRight: 20,
  },

  firstName: {
    marginTop: 8,
    textAlign: 'center',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: 14,
    color: '#022150',
  },
});

export default style;
