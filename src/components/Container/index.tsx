import React, {type PropsWithChildren} from 'react';
import {View, StyleSheet} from 'react-native';

type Props = {
  paddingHorizontal?: number;
  paddingVertical?: number;
};

const Container: React.FC<PropsWithChildren<Props>> = ({
  paddingHorizontal,
  paddingVertical,
  children,
}) => (
  <View style={styles({paddingHorizontal, paddingVertical}).container}>
    {children}
  </View>
);

const styles = ({paddingHorizontal, paddingVertical}: Props) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal,
      paddingVertical,
    },
  });

export default Container;
