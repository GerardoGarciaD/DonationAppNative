import React, {useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import globalStyles from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import style from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../Navigation/Routes';
import BackButton from '../../components/BackButton/BackButton';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <View style={style.backButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={globalStyles.margingBottom}>
          <Header title="Hello and Welcome" />
        </View>
        <View style={globalStyles.margingBottom}>
          <Input
            label="Name"
            placeholder="Enter your name"
            onChangeText={value => setName(value)}
          />
        </View>
        <View style={globalStyles.margingBottom}>
          <Input
            label="Email"
            placeholder="Enter your email"
            onChangeText={value => setEmail(value)}
            keyboardType="email-address"
          />
        </View>
        <View style={globalStyles.margingBottom}>
          <Input
            label="Password"
            onChangeText={value => setPassword(value)}
            keyboardType="email-address"
            secureTextEntry
          />
        </View>

        <View style={globalStyles.margingBottom}>
          <Button title="Register" />
        </View>
        <Pressable
          style={style.registrationButton}
          onPress={() => {
            navigation.navigate(Routes.Login);
          }}>
          <Header title="Already have an account?" type="h3" color="#156CF7" />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;
