import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import globalStyles from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import style from './style';

const Login = () => {
  const [email, setEmail] = useState('');
  console.log(email);

  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView style={style.container}>
        <Input
          label="Email"
          placeholder="Enter your email"
          onChangeText={value => setEmail(value)}
          keyboardType="email-address"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
