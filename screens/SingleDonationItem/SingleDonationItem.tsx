import React, {FC} from 'react';
import {SafeAreaView, Text} from 'react-native';
import BackButton from '../../components/BackButton/BackButton';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const SingleDonationItem: FC<Props> = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="m-5">
      <BackButton onPress={() => navigation.goBack()} />
      <Text className="mt-3">Pagina de donación</Text>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
