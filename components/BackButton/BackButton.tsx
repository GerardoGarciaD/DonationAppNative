import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {FC} from 'react';
import {Pressable, Text} from 'react-native';
import style from './style';

type Props = {
  onPress: () => void;
};

const BackButton: FC<Props> = ({onPress}) => {
  return (
    <Pressable onPress={onPress} style={style.container}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Pressable>
  );
};

export default BackButton;
