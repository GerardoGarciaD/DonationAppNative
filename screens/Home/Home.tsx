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
const Home = () => {
  const user = useSelector(state => state.user);
  const categories = useSelector(state => state.categories);
  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isCategoryLoading, setIsCategoryLoading] = useState(false);

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
              <Header title={`${user.firstName} ${user.lastName}. 👋`} />
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

              console.log(
                'User reached end of the list and is on the page ' +
                  categoryPage,
              );

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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
