import React, {FC} from 'react';
import {Image, View} from 'react-native';
import Badge from '../Badge/Badge';
import Header from '../Header/Header';
import style from './style';

type Props = {
  uri: string;
  badgeTitle: string;
  donationTitle: string;
  price: number;
};

const SingleDonationItem: FC<Props> = ({
  uri,
  badgeTitle,
  donationTitle,
  price,
}) => {
  return (
    <View>
      <View>
        <View style={style.badge}>
          <Badge title={badgeTitle} />
        </View>
        <Image resizeMode="contain" source={{uri: uri}} style={style.image} />
      </View>

      <View style={style.donationInformation}>
        <Header title={donationTitle} type="h3" color="#0A043C" />
        <Header title={`$ ${price.toFixed(2)}`} type="h3" color="#156CF7" />
      </View>
    </View>
  );
};

export default SingleDonationItem;
