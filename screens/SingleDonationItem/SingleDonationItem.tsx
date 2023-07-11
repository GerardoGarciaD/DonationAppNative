import React from 'react';
import style from './style';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {useSelector} from 'react-redux';
import globalStyles from '../../assets/styles/globalStyle';
import BackButton from '../../components/BackButton/BackButton';
import {useNavigation} from '@react-navigation/native';

const SingleDonationItem = () => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationId,
  );
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <BackButton onPress={() => navigation.goBack()} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
