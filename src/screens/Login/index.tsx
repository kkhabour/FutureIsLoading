import React, {useCallback} from 'react';
import {View, Text, Button, StyleSheet, Linking, Alert} from 'react-native';
import {Container, Spacer} from '../../components';
import storage from '../../utils/storage';

const axios = require('axios').default;

const url =
  'https://api.intra.42.fr/oauth/authorize?client_id=9617a6f6ef1ee55f1af46eb999b7443c51151b901d245e77f11e0ec21392068d&redirect_uri=kkhabour%3A%2F%2Ffutureisloading&response_type=code';

const Login: React.FC = () => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, []);

  const handleUrlListener = async (event: any) => {
    const code = event.url.split('code=')[1];

    try {
      const response = await axios.post(
        'https://api.intra.42.fr/oauth/token',
        null,
        {
          params: {
            grant_type: 'authorization_code',
            client_id:
              '9617a6f6ef1ee55f1af46eb999b7443c51151b901d245e77f11e0ec21392068d',
            client_secret:
              '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',
            code: code,
            redirect_uri: 'kkhabour://futureisloading',
          },
        },
      );

      storage.save({
        key: 'credentials',
        data: response.data,
        expires: 1000 * 3600,
      });

      //   navigation.navigate('Home');
    } catch (err: any) {
      console.log('error =>', err.message);
    }
  };

  React.useEffect(() => {
    Linking.addEventListener('url', handleUrlListener);

    return () => Linking.removeAllListeners('url');
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
