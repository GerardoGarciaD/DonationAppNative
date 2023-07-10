import React, {FC} from 'react';
import {Text} from 'react-native';
import style from './style';

type Props = {
  title: string;
  type?: 'h1' | 'h2' | 'h3';
};

const Header: FC<Props> = ({title = '', type = 'h1'}) => {
  const styleToApply = () => {
    switch (type) {
      case 'h1':
        return style.header1;
      case 'h2':
        return style.header2;
      case 'h3':
        return style.header3;
      default:
        return style.header1;
    }
  };

  return <Text style={styleToApply()}>{title}</Text>;
};

export default Header;
