import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';

const style = StyleSheet.create({
  userContainer: { flexDirection: 'row' },
  userTextContainer: { justifyContent: 'center', marginLeft: 10 },
  user: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  username: { color: '#000', fontFamily: getFontFamily('Inter', '600'), fontSize: 16 },
  location: { color: '#79869F', fontFamily: getFontFamily('Inter', '400'), fontSize: 12, marginTop: 5, marginLeft: -4 },
  postImage: { alignItems: 'center', marginTop: 20, marginVertical: 20 },
  userPostContainer: { margin: 35, paddingBottom: 20, borderBottomWidth: 1, borderBottomColor: '#EFF2F6' },
  actionContainer: { flexDirection: 'row' },
  like: { marginLeft: 3, color: '#79869F' },
  userActionContainer: { flexDirection: 'row', marginLeft: 10 },
});

export default style;
