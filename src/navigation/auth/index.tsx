import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../../screens';

const Stack = createNativeStackNavigator();

const AuthNavigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          animationTypeForReplace: 'pop',
        }}
      />
    </Stack.Navigator>
  );
};
export default AuthNavigation;
