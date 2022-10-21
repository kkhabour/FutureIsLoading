import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation';

import {store} from './src/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
