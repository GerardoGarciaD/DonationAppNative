import React, {FC, useState} from 'react';
import {Keyboard, Text, TextInput, View} from 'react-native';
import style from './style';

type InputProps = {
  label: string;
  placeholder?: string;
  onChangeText: (value: string) => void;
  keyboardType?: string;
  secureTextEntry?: boolean;
};

const Input: FC<InputProps> = ({
  label,
  placeholder = '',
  onChangeText,
  keyboardType = 'default',
  secureTextEntry = false,
}) => {
  const [value, setValue] = useState('');

  return (
    <View>
      <Text style={style.label}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholder={placeholder}
        style={style.input}
        value={value}
        onChangeText={val => {
          setValue(val);
          onChangeText(val);
        }}
      />
    </View>
  );
};

export default Input;
