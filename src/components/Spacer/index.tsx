import React from 'react';
import {View, StyleSheet} from 'react-native';

type Props = {
  height?: number;
  width?: number;
};

const Spacer: React.FC<Props> = ({height, width}) => (
  <View style={styles({height, width}).container} />
);

const styles = ({height, width}: Props) =>
  StyleSheet.create({
    container: {
      width: width,
      height: height,
    },
  });

export default Spacer;
