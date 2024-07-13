export type Post = {
  id: string;
  image: string;
  profileImage: string;
  firstName: string;
  lastName: string;
  location: string;
  likes: number;
  comments: number;
  bookmarks: number;
};

export const userPosts: Post[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    location: 'Boston, MA',
    likes: 1201,
    comments: 24,
    bookmarks: 55,
    id: 'p1',
    image: require('../../assets/images/default_post.png'),
    profileImage: require('../images/default_profile.png'),
  },
  {
    firstName: 'Adam',
    lastName: 'Spera',
    location: 'Boston, MA',
    likes: 800,
    comments: 14,
    bookmarks: 25,
    id: 'p2',
    image: require('../../assets/images/default_post.png'),
    profileImage: require('../images/default_profile.png'),
  },
  {
    firstName: 'Nata',
    lastName: 'Vachishvil',
    location: 'Boston, MA',
    likes: 2341,
    comments: 1,
    bookmarks: 2,
    id: 'p3',
    image: require('../../assets/images/default_post.png'),
    profileImage: require('../images/default_profile.png'),
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    location: 'Boston, MA',
    likes: 2,
    comments: 0,
    bookmarks: 0,
    id: 'p4',
    image: require('../../assets/images/default_post.png'),
    profileImage: require('../images/default_profile.png'),
  },
];

export const userPostsPageSize = 2;
