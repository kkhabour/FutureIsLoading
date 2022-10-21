import React, {type PropsWithChildren} from 'react';
import {Text as RNText} from 'react-native';

type Props = {
  style?: {};
};

const Text: React.FC<PropsWithChildren<Props>> = ({
  children,
  style,
  ...rest
}) => {
  return (
    <RNText style={[{color: 'black'}, {...style}]} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
