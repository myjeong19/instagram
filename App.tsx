/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaView, TouchableOpacity, View, Text, Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Title from './components/Title/Title';

import globalStyle from './assets/styles/Globalstyle';

import UserPostList from './components/UserPost/UserPostList';
import { useEffect, useState } from 'react';
import { scaleFontSize } from './assets/styles/scaling';

function App(): React.JSX.Element {
  const [screenData, setScreenData] = useState(Dimensions.get('screen'));

  useEffect(() => {
    Dimensions.addEventListener('change', result => {
      setScreenData(result.screen);
    });
  }, []);

  return (
    <SafeAreaView>
      <View style={globalStyle.header}>
        <Title title="Let's Explore" />
        <TouchableOpacity style={globalStyle.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} color="#898DAE" size={scaleFontSize(20)} />
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
