import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Loading} from '../../screens';

const Stack = createNativeStackNavigator();

const LoadingNavigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Loading"
        component={Loading}
        options={{
          headerShown: false,
          animationTypeForReplace: 'pop',
        }}
      />
    </Stack.Navigator>
  );
};

export default LoadingNavigation;
