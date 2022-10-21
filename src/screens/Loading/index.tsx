import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import storage from '../../utils/storage';
import {loading, setCredentials} from '../../features/auth/authSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';

const Loading: React.FC = () => {
  const authState = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const loadCredentials = async () => {
    try {
      const credentials = await storage.load({
        key: 'credentials',
        autoSync: true,
        syncInBackground: true,
      });

      dispatch(setCredentials(credentials));
    } catch (error: any) {
      console.log('credentials error =>', error.message);
    } finally {
      if (authState.isRedirect == false) {
        setTimeout(() => {
          dispatch(loading({loading: false}));
        }, 1000);
      }
    }
  };

  React.useEffect(() => {
    loadCredentials();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
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

export default Loading;
