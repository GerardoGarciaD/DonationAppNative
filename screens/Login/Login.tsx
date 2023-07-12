import React, {useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import globalStyles from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import style from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={globalStyles.margingBottom}>
          <Header title="Welcome Back" />
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
          <Button title="Login" />
        </View>
        <Pressable style={style.registrationButton}>
          <Header title="Dont have an account?" type="h3" color="#156CF7" />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
