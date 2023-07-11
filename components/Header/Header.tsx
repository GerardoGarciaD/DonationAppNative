import React, {FC} from 'react';
import {Text} from 'react-native';
import style from './style';

type Props = {
  title: string | number;
  type?: 'h1' | 'h2' | 'h3';
  color?: string;
  numberOfLines?: number | null;
};

const Header: FC<Props> = ({
  title = '',
  type = 'h1',
  color = '#000',
  numberOfLines = null,
}) => {
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

  return (
    <Text
      style={[styleToApply(), {color: color}]}
      numberOfLines={numberOfLines}>
      {title}
    </Text>
  );
};

export default Header;
