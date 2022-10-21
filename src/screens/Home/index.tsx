import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Spacer} from '../../components';
import {useDispatch} from 'react-redux';
import {unsetCredentials} from '../../features/auth/authSlice';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogoutPress = () => {
    dispatch(unsetCredentials());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Spacer height={24} />
      <Button title="Logout" onPress={handleLogoutPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

export default Home;
