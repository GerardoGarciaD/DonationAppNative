import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import globalStyles from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import style from './style';
import {useSelector} from 'react-redux';
import Button from '../../components/Button/Button';

const Payments = () => {
  const donationInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView contentContainerStyle={style.paymentContainer}>
        <Header title="Making Donation" />
        <Text style={style.donationAmountDescription}>
          You are about to donate {donationInformation.price}
        </Text>
      </ScrollView>
      <View style={style.donationButton}>
        <Button title="Donate" />
      </View>
    </SafeAreaView>
  );
};

export default Payments;
