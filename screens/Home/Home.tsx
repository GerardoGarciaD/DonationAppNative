import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import {useDispatch, useSelector} from 'react-redux';
import {Pressable, Text} from 'react-native';
import {updateFirstName} from '../../redux/reducers/User';

const Home = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  console.log(user);
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <Header title={`${user.firstName} ${user.lastName}`} />

      <Pressable
        onPress={() => dispatch(updateFirstName({firstName: 'Pedro'}))}>
        <Text>Cambiame el nombre</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;
