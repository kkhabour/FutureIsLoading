import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Container, Spacer} from '../../components';

const Login: React.FC = () => {
  const handleOnPress = () => {};

  return (
    <Container paddingHorizontal={16}>
      <View style={styles.container}>
        <Text style={styles.text}>Kindly Connect Your 42 Account</Text>
        <Spacer height={24} />
        <Button title="Login" onPress={handleOnPress} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Login;
