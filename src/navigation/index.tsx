import React from 'react';
import {Linking} from 'react-native';
import AppNavigation from './app';
import AuthNavigation from './auth';
import LoadingNavigation from './loading';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {useDispatch} from 'react-redux';
import {loading, setCredentials} from '../features/auth/authSlice';
import {useLoginMutation} from '../features/auth/authApiSlice';
import storage from '../utils/storage';
import {params} from '../constant/loginParams';

const Navigation: React.FC = () => {
  const authState = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const [login] = useLoginMutation();

  const handleUrlListener = React.useCallback(async (event: any) => {
    const code = event.url.split('code=')[1];

    const result = await login({...params, code});
    dispatch(setCredentials(result.data));

    // set user credentials to redux store
    await storage.save({
      key: 'credentials',
      data: {...result.data},
      expires: 1000 * 3600,
    });
    setTimeout(() => {
      dispatch(loading({loading: false}));
    }, 1000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    Linking.addEventListener('url', handleUrlListener);

    return () => Linking.removeAllListeners('url');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (authState.isLoading) {
    return <LoadingNavigation />;
  }

  return authState.isAuth ? <AppNavigation /> : <AuthNavigation />;
};

export default Navigation;
