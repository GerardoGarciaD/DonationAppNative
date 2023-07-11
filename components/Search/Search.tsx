import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {FC, useRef, useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import style from './style';

type Props = {
  onSearch: (text: string) => void;
};

const Search: FC<Props> = ({onSearch}) => {
  const [search, setSearch] = useState('');

  const textInputRef = useRef(null);
  const handleFocus = () => {
    textInputRef.current?.focus();
  };

  const handleSearch = (text: string) => {
    setSearch(text);
    onSearch(text);
  };

  return (
    <Pressable onPress={handleFocus} style={style.searchInputContainer}>
      <FontAwesomeIcon color="#25C0FF" size={22} icon={faSearch} />
      <TextInput
        value={search}
        onChangeText={value => handleSearch(value)}
        ref={textInputRef}
        style={style.searchInput}
      />
    </Pressable>
  );
};

export default Search;
