import 'react-native-gesture-handler';
import React from 'react';
import MainNavigation from './Navigation/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
