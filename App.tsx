import 'react-native-gesture-handler';
import React, {useEffect, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store, {persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import RootNAvigation from './Navigation/RootNavigation';
import {AppState} from 'react-native';
import {chechToken} from './api/user';
const App = () => {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subsciption = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        // console.log('You have come back to the app');
        //Aqui volvemos a entrar a la app despues de haberla minimizado
        chechToken();
      }

      appState.current = nextAppState;
    });

    //En esta parte la app se abre por primera vez (no estaba minimizada)
    // console.log('Application has rendered');
    chechToken();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <RootNAvigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
