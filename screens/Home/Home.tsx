import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
// import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <View>
        <Header title="Headerrr" />
        {/*         <Button title="Donate" onPress={() => console.log('Donate')} />
        <Button title="Donate" isDisabled={true} /> */}
        <Tab title="Highlight" />
        <Tab title="Highlight" isInactive={true} />
        <Badge title="Environment" />
      </View>
    </SafeAreaView>
  );
};

export default Home;
