import React, {FC} from 'react';
import {Pressable, Text} from 'react-native';
import style from './style';

type Props = {
  title: string;
  isDisabled?: boolean;
  onPress?: () => void;
};

const Button: FC<Props> = ({title, isDisabled, onPress}) => {
  return (
    <Pressable
      disabled={isDisabled}
      onPress={onPress}
      style={[style.button, isDisabled && style.disabled]}>
      <Text style={style.title}>{title}</Text>
    </Pressable>
  );
};

export default Button;
