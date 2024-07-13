import { View, FlatList, ImageSourcePropType } from 'react-native';
import { userStoriesPageSize } from '../../assets/constans/user-stories';
import { useState, useEffect } from 'react';

import { Stories } from '../../assets/constans/user-stories';
import { userStories } from '../../assets/constans/user-stories';

import globalStyle from '../../assets/styles/Globalstyle';

import UserStory from './UserStory';

export default function UserStoryList() {
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
    <View style={globalStyle.userStoryContainer}>
      <FlatList
        onEndReachedThreshold={0.5}
        onEndReached={handleReached}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={userStoriesRenderedData}
        renderItem={({ item }) => (
          <UserStory key={item.id} firstName={item.firstName} profileImage={item.profileImage as ImageSourcePropType} />
        )}
      />
    </View>
  );
}
