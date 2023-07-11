import React, {FC, useRef, useState} from 'react';
import {Pressable, Text} from 'react-native';
import style from './style';
import {horizontalScale} from '../../assets/styles/scaling';

type Props = {
  title: string;
  isInactive?: boolean;
  onPress: (arg0: number) => void;
  tabId: number;
};

const Tab: FC<Props> = ({title, isInactive = false, onPress, tabId}) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 33;

  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

  return (
    <Pressable
      onPress={() => onPress(tabId)}
      style={[style.tab, isInactive && style.inactiveTab, tabWidth]}>
      <Text
        onTextLayout={e => setWidth(e.nativeEvent.lines[0].width)}
        ref={textRef}
        style={[style.title, isInactive && style.inactiveTitle]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Tab;
