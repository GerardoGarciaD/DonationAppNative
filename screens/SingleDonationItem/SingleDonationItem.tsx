import React from 'react';
import style from './style';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';

const SingleDonationItem = () => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationId,
  );

  console.log('donationItemInformation', donationItemInformation);

  return <Text>SingleDonationItem</Text>;
};

export default SingleDonationItem;
