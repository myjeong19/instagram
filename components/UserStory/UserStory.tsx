import React from 'react';

import { View, Text, ImageSourcePropType } from 'react-native';

import style from './style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

export type UserStoryProps = {
  firstName: string;
  profileImage: ImageSourcePropType;
};

export default function UserStory(props: UserStoryProps) {
  const { firstName, profileImage } = props;

  return (
    <View style={style.storyContainer}>
      <UserProfileImage profileImage={profileImage} imageDimensions={65} />
      <Text style={style.firstName}>{firstName}</Text>
    </View>
  );
}
