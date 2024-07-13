/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { SafeAreaView, TouchableOpacity, View, Text, FlatList, ImageSourcePropType } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import type { Stories } from './assets/constans/user-stories';
import { userStories, userStoriesPageSize } from './assets/constans/user-stories';

import Title from './components/Title/Title';

import globalStyle from './assets/styles/Globalstyle';
import UserStory from './components/UserStory/UserStory';

function App(): React.JSX.Element {
  const [userStoriesFetchedCounter, setUserStoriesFetchedCounter] = useState<number>(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState<Stories[]>([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState<boolean>(false);

  const pagination = (database: Stories[], currentPage: number, pageSize: number): Stories[] | [] => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }

    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, userStoriesFetchedCounter, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);
  }, []);

  const handleReached = () => {
    if (isLoadingUserStories) {
      return false;
    }
    setIsLoadingUserStories(true);
    const contentToAppend = pagination(userStories, userStoriesFetchedCounter + 1, userStoriesPageSize);
    if (contentToAppend.length > 0) {
      setUserStoriesFetchedCounter(prevCounter => prevCounter + 1);
      setUserStoriesRenderedData(prev => {
        const updatedData = [...prev, ...contentToAppend];
        const uniqueData = updatedData.filter((item, index, self) => index === self.findIndex(t => t.id === item.id));
        return uniqueData;
      });
    }
    setIsLoadingUserStories(false);
  };

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
      <View style={globalStyle.userStoryContainer}>
        <FlatList
          onEndReachedThreshold={0.5}
          onEndReached={handleReached}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={userStoriesRenderedData}
          renderItem={({ item }) => (
            <UserStory
              key={item.id}
              firstName={item.firstName}
              profileImage={item.profileImage as ImageSourcePropType}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
