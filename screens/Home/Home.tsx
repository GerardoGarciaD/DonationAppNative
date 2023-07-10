import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './style';
import globalStyles from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <View>
        <Header title="Headerrr" />
      </View>
    </SafeAreaView>
  );
};

export default Home;
