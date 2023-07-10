import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './style';
import globalStyles from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <View>
        <Header title="Headerrr" />
        <Button title="Donate" onPress={() => console.log('Donate')} />
        <Button title="Donate" isDisabled={true} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
