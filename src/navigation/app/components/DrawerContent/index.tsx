import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Spacer, Text} from '../../../../components';
import {useGetMeQuery} from '../../../../features/user/userApiSlice';

const DrawerContent = (props: any) => {
  const {data, isLoading} = useGetMeQuery();

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: `https://cdn.intra.42.fr/users/${data?.login}.jpg`}}
        />
        <Spacer height={8} />

        <Text
          style={
            styles.fullname
          }>{`${data?.first_name} ${data?.last_name}`}</Text>
        <Text style={styles.login}>{`@${data?.login}`}</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  image: {
    marginLeft: -4,
    height: 60,
    width: 60,
    borderRadius: 40,
  },
  fullname: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  login: {
    fontWeight: 'bold',
    color: 'grey',
  },
});

export default DrawerContent;
