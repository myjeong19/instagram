/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaView, TouchableOpacity, View, Text, FlatList, ImageSourcePropType } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Title from './components/Title/Title';

import globalStyle from './assets/styles/Globalstyle';

import UserPostList from './components/UserPost/UserPostList';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={globalStyle.header}>
        <Title title="Let's Explore" />
        <TouchableOpacity style={globalStyle.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} color="#898DAE" size={20} />
          <View style={globalStyle.messageNumberContainer}>
            <Text style={globalStyle.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>

      <UserPostList />
    </SafeAreaView>
  );
}

export default App;
