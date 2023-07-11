import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
// import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Search from '../../components/Search/Search';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <View>
        <Search
          onSearch={value => {
            console.log(value);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
