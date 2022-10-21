import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home, Details} from '../../screens';
import DrawerContent from './components/DrawerContent';

const Drawer = createDrawerNavigator();

const AppNavigation: React.FC = () => {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Details" component={Details} />
    </Drawer.Navigator>
  );
};

export default AppNavigation;
