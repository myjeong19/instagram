import { View, FlatList, ImageSourcePropType } from 'react-native';
import { useEffect, useState } from 'react';

import type { Post } from '../../assets/constans/user-posts';
import { userPosts, userPostsPageSize } from '../../assets/constans/user-posts';

import UserPost from './UserPost';
import UserStoryList from '../UserStory/UserStoryList';

export default function UserPostList(): React.JSX.Element {
  const [userPostsFetchedCounter, setUserPostsFetchedCounter] = useState<number>(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState<Post[]>([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState<boolean>(false);

  const pagination = (database: Post[], currentPage: number, pageSize: number): Post[] | [] => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }

    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserPosts(true);
    const getInitialData = pagination(userPosts, userPostsFetchedCounter, userPostsPageSize);
    setUserPostsRenderedData(getInitialData);
    setIsLoadingUserPosts(false);
  }, []);

  const handleReached = () => {
    if (isLoadingUserPosts) {
      return false;
    }
    setIsLoadingUserPosts(true);
    const contentToAppend = pagination(userPosts, userPostsFetchedCounter + 1, userPostsPageSize);
    if (contentToAppend.length > 0) {
      setUserPostsFetchedCounter(prevCounter => prevCounter + 1);
      setUserPostsRenderedData(prev => {
        const updatedData = [...prev, ...contentToAppend];
        const uniqueData = updatedData.filter((item, index, self) => index === self.findIndex(t => t.id === item.id));
        return uniqueData;
      });
    }
    setIsLoadingUserPosts(false);
  };

  return (
    <View>
      <FlatList
        data={userPostsRenderedData}
        renderItem={({ item }) => (
          <UserPost
            key={item.id}
            {...item}
            profileImage={item.profileImage as ImageSourcePropType}
            image={item.image as ImageSourcePropType}
          />
        )}
        ListHeaderComponent={<UserStoryList />}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.5}
        onEndReached={handleReached}
      />
    </View>
  );
}
