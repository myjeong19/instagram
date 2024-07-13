import { View, FlatList, ImageSourcePropType } from 'react-native';
import { useState } from 'react';

import type { Post } from '../../assets/constans/user-posts';
import { userPosts } from '../../assets/constans/user-posts';

import UserPost from './UserPost';
import UserStoryList from '../UserStory/UserStoryList';

export default function UserPostList() {
  const [userPostsFetchedCounter, setUserPostsFetchedCounter] = useState<number>(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState<Post[]>([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState<boolean>(false);

  return (
    <View>
      <FlatList
        data={userPosts}
        renderItem={({ item }) => (
          <UserPost
            key={item.id}
            {...item}
            profileImage={item.profileImage as ImageSourcePropType}
            image={item.image as ImageSourcePropType}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<UserStoryList />}
      />
    </View>
  );
}
