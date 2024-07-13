export type Stories = {
  id: string;
  firstName: string;
  profileImage: string;
};

export const userStories: Stories[] = [
  {
    id: 'u1',
    firstName: 'John',
    profileImage: require('../images/default_profile.png'),
  },
  {
    id: 'u2',
    firstName: 'Jack',
    profileImage: require('../images/default_profile.png'),
  },
  {
    id: 'u3',
    firstName: 'Doe',
    profileImage: require('../images/default_profile.png'),
  },
  {
    id: 'u4',
    firstName: 'Mike',
    profileImage: require('../images/default_profile.png'),
  },
  {
    id: 'u5',
    firstName: 'Nicolas',
    profileImage: require('../images/default_profile.png'),
  },
  {
    id: 'u6',
    firstName: 'Oliver',
    profileImage: require('../images/default_profile.png'),
  },
  {
    id: 'u7',
    firstName: 'Angel',
    profileImage: require('../images/default_profile.png'),
  },
  {
    id: 'u8',
    firstName: 'Joseph',
    profileImage: require('../images/default_profile.png'),
  },
];

export const userStoriesPageSize = 4;
