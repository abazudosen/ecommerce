/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar,useColorScheme} from 'react-native';
import { StripeProvider } from '@stripe/stripe-react-native';

import {Colors,} from 'react-native/Libraries/NewAppScreen';
import Router from './src/router';

import Amplify from 'aws-amplify'
import {withAuthenticator} from 'aws-amplify-react-native'
import config from './src/aws-exports'
Amplify.configure(config)

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <StripeProvider publishableKey='pk_test_WgwNxeLzMGoPpUfJPA7nG4Ul00Wdg0YzJr'>
      <Router />
      </StripeProvider>
    </View>
  );
};

export default withAuthenticator(App);
