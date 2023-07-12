import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from '../../assets/styles/globalStyle';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, Image, Pressable, ScrollView, Text, View} from 'react-native';
import style from './style';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Tab from '../../components/Tab/Tab';
import {updateSelectedCategoryId} from '../../redux/reducers/Categories';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import {updateSelectedDonationId} from '../../redux/reducers/Donations';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../Navigation/Routes';
const Home = () => {
  const user = useSelector(state => state.user);

  const categories = useSelector(state => state.categories);
  const donations = useSelector(state => state.donations);
  const navigation = useNavigation();

  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isCategoryLoading, setIsCategoryLoading] = useState(false);
  const [donationItems, setDonationItems] = useState([]);

  useEffect(() => {
    const items = donations.items.filter(item =>
      item.categoryIds.includes(categories.selectedCategoryId),
    );
    setDonationItems(items);
  }, [categories.selectedCategoryId]);

  useEffect(() => {
    setIsCategoryLoading(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, categroyPageSize),
    );
    setCategoryPage(categoryPage + 1);
    setIsCategoryLoading(false);
  }, []);

  const categroyPageSize = 4;

  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex > items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };

  const disptach = useDispatch();

  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroText}>Hello, </Text>
            <View style={style.userName}>
              <Header title={`${user.displayName} 👋`} />
            </View>
          </View>
          <Image
            source={{uri: user.profileImage}}
            style={style.profileImage}
            resizeMode="contain"
          />
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

        <View style={style.categoryHeader}>
          <Header title="Select Category" type="h2" />
        </View>
        <View style={style.categories}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isCategoryLoading) {
                return;
              }

              setIsCategoryLoading(true);
              let newData = pagination(
                categories.categories,
                categoryPage,
                categroyPageSize,
              );

              if (newData.length > 0) {
                setCategoryList([...categoryList, ...newData]);
                setCategoryPage(prev => prev + 1);
              }
              setIsCategoryLoading(false);
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({item}) => (
              <View style={style.categoryItem} key={item.categoryId}>
                <Tab
                  tabId={item.categoryId}
                  onPress={value => disptach(updateSelectedCategoryId(value))}
                  title={item.name}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                />
              </View>
            )}
          />
        </View>
        {donationItems.length > 0 && (
          <View style={style.donationItemsContainer}>
            {donationItems.map(value => {
              const categoryInformation = categories.categories.find(
                val => val.categoryId === categories.selectedCategoryId,
              );

              return (
                <View
                  key={value.donationItemId}
                  style={style.singleDonationItem}>
                  <SingleDonationItem
                    onPress={selectedDonationId => {
                      disptach(updateSelectedDonationId(selectedDonationId));
                      navigation.navigate(Routes.SingleDonationItem as String, {
                        categoryInformation,
                      });
                    }}
                    donationItemId={value.donationItemId}
                    uri={value.image}
                    donationTitle={value.name}
                    badgeTitle={categoryInformation.name}
                    price={parseFloat(value.price)}
                  />
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
