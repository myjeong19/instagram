import React from 'react';
import {Text} from 'react-native';

import style from './style';

type TitleProps = {
  title: string;
};

export default function Title(props: TitleProps) {
  const {title} = props;

  return <Text style={style.title}>{title}</Text>;
}
