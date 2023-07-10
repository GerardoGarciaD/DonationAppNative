import React, {FC, useRef, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import style from './style';
import {horizontalScale} from '../../assets/styles/scaling';

type Props = {
  title: string;
};

const Badge: FC<Props> = ({title}) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 10;

  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

  return (
    <View style={[style.badge, tabWidth]}>
      <Text
        onTextLayout={e => setWidth(e.nativeEvent.lines[0].width)}
        ref={textRef}
        style={[style.title]}>
        {title}
      </Text>
    </View>
  );
};

export default Badge;
