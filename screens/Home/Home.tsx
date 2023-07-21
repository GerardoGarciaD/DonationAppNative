import React, {FC} from 'react';
import {Text, SafeAreaView, Pressable} from 'react-native';
import {logOut} from '../../api/user';
import {useDispatch} from 'react-redux';
import Header from '../../components/Header/Header';
import {resetToInitialState} from '../../redux/reducers/User';
import {Routes} from '../../Navigation/Routes';

type Props = {
  navigation: any;
};

const Home: FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView className="m-5">
      <Text>Home</Text>
      <Pressable
        className="mt-3"
        onPress={async () => {
          dispatch(resetToInitialState());
          await logOut();
        }}>
        <Header title={'Logout'} type="h3" color="#156CF7" />
      </Pressable>
      <Pressable
        className="mt-3"
        onPress={() => {
          navigation.navigate(Routes.SingleDonationItem);
        }}>
        <Header title={'Donation Page'} type="h3" color="#156CF7" />
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;
