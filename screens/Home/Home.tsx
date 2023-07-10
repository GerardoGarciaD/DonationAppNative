import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './style';
import globalStyles from '../../assets/styles/globalStyle';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
