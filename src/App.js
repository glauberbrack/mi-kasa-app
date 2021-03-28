import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ThemeProvider} from 'styled-components';

import {theme} from './styles/theme';
import {SplashScreen} from './screens/SplashScreen';

const App: () => Node = () => {
  return (
    <ThemeProvider theme={theme}>
      <SplashScreen />
    </ThemeProvider>
  );
};

export default App;
