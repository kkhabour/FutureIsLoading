import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Details} from '../../screens';

const Stack = createNativeStackNavigator();

const AppNavigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
