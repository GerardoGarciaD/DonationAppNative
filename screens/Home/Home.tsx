import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from '../../assets/styles/globalStyle';
import {useDispatch, useSelector} from 'react-redux';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import style from './style';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
const Home = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroText}>Hello, </Text>
            <View style={style.userName}>
              <Header title={`${user.firstName} ${user.lastName}. 👋`} />
            </View>
          </View>
          <Image
            source={{uri: user.profileImage}}
            style={style.profileImage}
            resizeMode="contain"></Image>
        </View>
        <View style={style.searchBox}>
          <Search onSearch={() => {}} />
        </View>
        <Pressable style={style.highlightedImageContainer}>
          <Image
            style={style.highlightedImage}
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode="contain"
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
