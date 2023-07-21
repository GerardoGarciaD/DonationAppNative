import React, {useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import globalStyles from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import style from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../Navigation/Routes';
import {loginUser} from '../../api/user';
import {useDispatch} from 'react-redux';
import {login} from '../../redux/reducers/User';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

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

        {error.length > 0 && <Text style={style.error}>{error}</Text>}
        <View style={globalStyles.margingBottom}>
          <Button
            onPress={async () => {
              let user = await loginUser(email, password);
              if (!user.status) {
                setError(user.error);
                setTimeout(() => {
                  setError('');
                }, 3000);
              } else {
                setError('');
                dispatch(login(user.data));
                navigation.navigate(Routes.Home);
              }
            }}
            isDisabled={email.length < 5 || password.length < 8}
            title="Login"
          />
        </View>
        <Pressable
          style={style.registrationButton}
          onPress={() => navigation.navigate(Routes.Registration)}>
          <Header title="Dont have an account?" type="h3" color="#156CF7" />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
