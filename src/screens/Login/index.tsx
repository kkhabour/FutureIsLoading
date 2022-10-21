import React, {useCallback} from 'react';
import {View, Button, StyleSheet, Linking, Alert} from 'react-native';
import {Container, Spacer} from '../../components';
import {Text} from '../../components';

import {useDispatch} from 'react-redux';
import {loading, setRedirection} from '../../features/auth/authSlice';

const url =
  'https://api.intra.42.fr/oauth/authorize?client_id=9617a6f6ef1ee55f1af46eb999b7443c51151b901d245e77f11e0ec21392068d&redirect_uri=kkhabour%3A%2F%2Ffutureisloading&response_type=code';

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
      dispatch(setRedirection(true));
      dispatch(loading({loading: true}));
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, []);

  return (
    <Container paddingHorizontal={16}>
      <View style={styles.container}>
        <Text style={styles.text}>Kindly Connect Your 42 Account</Text>
        <Spacer height={24} />
        <Button title="Login" onPress={handlePress} />
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
