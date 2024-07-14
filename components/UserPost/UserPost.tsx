import { ImageSourcePropType, View, Text, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBookmark, faEllipsisH, faHeart } from '@fortawesome/free-solid-svg-icons';

import UserProfileImage from '../UserProfileImage/UserProfileImage';

import style from './style';

type UserPostProps = {
  id: string;
  profileImage: ImageSourcePropType;
  image: ImageSourcePropType;
  firstName: string;
  lastName: string;
  location: string;
  likes: number;
  comments: number;
  bookmarks: number;
};

export default function UserPost(props: UserPostProps): React.JSX.Element {
  const { image, profileImage, firstName, lastName, location, likes, comments, bookmarks } = props;

  return (
    <View style={style.userPostContainer}>
      <View style={style.user}>
        <View style={style.userContainer}>
          <UserProfileImage profileImage={profileImage as ImageSourcePropType} imageDimensions={48} />
          <View style={style.userTextContainer}>
            <Text style={style.username}>
              {firstName} {lastName}
            </Text>
            {location && <Text style={style.location}>{location}</Text>}
          </View>
        </View>

        <FontAwesomeIcon icon={faEllipsisH} color="#79889F" size={24}></FontAwesomeIcon>
      </View>
      <View style={style.postImage}>
        <Image source={image} />
      </View>
      <View style={style.userActionContainer}>
        <View style={{ ...style.actionContainer }}>
          <FontAwesomeIcon icon={faHeart} color="#79869F" />
          <Text style={style.like}>{likes}</Text>
        </View>
        <View style={{ ...style.actionContainer, marginLeft: 27 }}>
          <FontAwesomeIcon icon={faBookmark} color="#79869F" />
          <Text style={style.like}>{bookmarks}</Text>
        </View>
        <View style={{ ...style.actionContainer, marginLeft: 27 }}>
          <FontAwesomeIcon icon={faHeart} color="#79869F" />
          <Text style={style.like}>{comments}</Text>
        </View>
      </View>
    </View>
  );
}
