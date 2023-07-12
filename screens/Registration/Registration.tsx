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
import {createUser} from '../../api/user';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [success, setSuccess] = useState('');
  const [error, seterror] = useState('');

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
            secureTextEntry
          />
        </View>

        {error.length > 0 && <Text style={style.error}>{error}</Text>}
        {success.length > 0 && <Text style={style.success}>{success}</Text>}

        <View style={globalStyles.margingBottom}>
          <Button
            isDisabled={
              name.length <= 2 || email.length <= 2 || password.length < 8
            }
            title="Register"
            onPress={async () => {
              let user = await createUser(name, email, password);
              if (user.error) {
                seterror(user.error);
                setTimeout(() => {
                  seterror('');
                }, 3000);
              } else {
                seterror('');
                setSuccess('You have successfully registered');
                setTimeout(() => {
                  navigation.goBack();
                  setSuccess('');
                }, 3000);
              }
            }}
          />
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
