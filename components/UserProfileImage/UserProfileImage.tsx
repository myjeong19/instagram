import { View, Image, ImageSourcePropType } from 'react-native';

import style from './style';

type UserProfileImageProps = {
  profileImage: ImageSourcePropType;
  imageDimensions: number;
};

export default function UserProfileImage(props: UserProfileImageProps) {
  const { profileImage, imageDimensions } = props;

  return (
    <View style={[style.userImageContainer, { borderRadius: imageDimensions }]}>
      <Image source={profileImage} style={{ width: imageDimensions, height: imageDimensions }} />
    </View>
  );
}
