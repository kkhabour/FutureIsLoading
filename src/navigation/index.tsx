import React, {useState} from 'react';
import {View, Text} from 'react-native';
import AppNavigation from './app';
import AuthNavigation from './auth';
import storage from '../utils/storage';

const Navigation: React.FC = () => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [auth, setAuth] = useState<Boolean>(false);

  const loadCredentials = async () => {
    try {
      const credentials = await storage.load({key: 'credentials'});
      console.log('credentials =>', credentials);
      setAuth(true);
    } catch (err: any) {
      console.log('credentials error =>', err.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    loadCredentials();
  }, []);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return auth ? <AppNavigation /> : <AuthNavigation />;
};

export default Navigation;
